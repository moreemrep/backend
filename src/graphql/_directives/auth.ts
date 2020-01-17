import { CODES } from '../../errors'
import { Context } from '../../generated/types';

export default {
  async auth (next, _, requires, context: Context) {
    const { token, utils } = context

    if (!token) throw new Error(CODES.UNAUTHENTICATED)

    const _id = await utils.auth.verifyTokenAndGetUserFromCache(token)

    context.user = _id

    if (!context.user) throw new Error(CODES.UNAUTHENTICATED)

    return next()
  }
}
