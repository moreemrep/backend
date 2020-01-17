import { FirebaseService } from 'firebase-service-plugin'

export default FirebaseService(() => {
  let mockAuth: any
  // mock used functions
  return {
    auth: {
      verifyIdToken: async (token, checkRevoked) => {
        const { uid, email } = JSON.parse(token)
        return {
          uid,
          email
        }
      }
    },
    ...mockAuth
  }
})
