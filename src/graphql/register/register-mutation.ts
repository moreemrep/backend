import { Input } from 'graphql-api-scripts'
import { RegisterInput, RegisterPayload } from '../../generated/schema'
import { Context } from '../../generated/types'
import { CODES } from '../../errors'

export const resolver = {
  Mutation: {
    register: async (_, { input }: Input<RegisterInput>, { services, repositories, token }: Context): Promise<RegisterPayload> => {
      if (!token) {
        return {
          success: false,
          error: CODES.UNAUTHENTICATED
        }
      }

      const { firebase } = services
      const { User } = repositories.mongoose

      const { uid, email } = await firebase.auth.verifyIdToken(token)

      const user = await User.create({ uid, email, name: input.name })

      return {
        success: true,
        id: user._id
      }
    }
  }
}
