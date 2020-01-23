import { CODES } from '../../errors'
import { Context } from '../../generated/types'
import { Next } from 'graphql-api-scripts'
import { Role } from '../../generated/schema'

interface Require {
  role: [Role];
}

export default {
  async auth (next: Next, _, { role }: Require, context: Context): Promise<void> {
    const { token, utils, repositories, services } = context

    const { User } = repositories.mongoose
    const { cache } = utils
    const { firebase } = services

    if (!token) throw new Error(CODES.UNAUTHENTICATED)

    const { uid } = await firebase.auth.verifyIdToken(token)

    const _id = await cache.getOrCache<string>(uid, '_id', async () => {
      const user = await User.findOne({ uid }, { _id: 1 })
      return user._id
    })

    if (!_id) throw new Error(CODES.UNAUTHENTICATED)

    if (role) {
      const userRole = await cache.getOrCache<Role>(uid, 'role', async () => {
        const user = await User.findById(_id, { role: 1 })
        return user.role
      })

      if (!role.includes(userRole)) throw new Error(CODES.UNAUTHORIZED)
    }

    context.user = _id

    return next()
  }
}
