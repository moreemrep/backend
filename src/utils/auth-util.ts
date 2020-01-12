import { Context } from '../types'
import { CODES } from '../errors'
import CacheUtil from './cache-util'

export interface AuthUtil {
  verifyTokenAndGetUserFromCache: (token: string) => Promise<string|undefined>;
}

export default ({ repositories, services }: Context): AuthUtil => {
  const cache = CacheUtil({ repositories, services })
  const { firebase } = services
  const { mongoose } = repositories
  const { User } = mongoose

  return {
    verifyTokenAndGetUserFromCache: async (token) => {
      const { uid } = await firebase.verifyIdToken(token)
      return cache.getOrCache(uid, async () => {
        const user = await User.findOne({ uid }, { _id: 1 })
        if (!user) throw new Error(CODES.NOT_FOUND)
        return user._id.toString()
      })
    }
  }
}
