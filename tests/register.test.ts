import { createQuery } from 'graphql-api-scripts'
import { RegisterInput } from '~/generated/schema'
import { CODES } from '~/errors'

const query = createQuery<RegisterInput>(`
mutation ($input: RegisterInput!){
  payload: register(input: $input) {
    success
    error
    id
  }
}
`)

describe('mutation register', () => {
  const { request, users: { unregistered } } = global

  it('should register new user', () => {
    query.variables = {
      input: {
        name: 'teste'
      }
    }

    return request(query, unregistered).expect(res => {
      expect(res.body.data.payload.success).toBeTruthy()
      expect(res.body.data.payload.id).toBeDefined()
    })
  })

  it('should throw error if doesnt have token', () => {
    query.variables = {
      input: {
        name: 'teste'
      }
    }

    return request(query).expect(res => {
      expect(res.body.data.payload.success).toBeFalsy()
      expect(res.body.data.payload.error).toBe(CODES.UNAUTHENTICATED)
    })
  })
})
