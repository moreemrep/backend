import { createQuery } from 'graphql-api-scripts'
import { Operation, CalculateInput } from '~/generated/schema'
import { CODES } from '~/errors'

const query = createQuery<CalculateInput>(`
mutation ($input: CalculateInput!){
  payload: calculate(input: $input) {
    response
  }
}
`)

describe('mutation calculate', () => {
  const { request, users: { admin, user } } = global

  it('should sum', async () => {
    query.variables = {
      input: {
        n1: 10,
        operation: Operation.Sum,
        n2: 15
      }
    }

    await request(query, admin).expect(res => {
      expect(res.body.data.payload.response).toBe(25)
    })

    // test cache
    return request(query, admin).expect(res => {
      expect(res.body.data.payload.response).toBe(25)
    })
  })

  it('should divide', () => {
    query.variables = {
      input: {
        n1: 30,
        operation: Operation.Divide,
        n2: 15
      }
    }
    return request(query, admin).expect(res => {
      expect(res.body.data.payload.response).toBe(2)
    })
  })

  it('should subtract', () => {
    query.variables = {
      input: {
        n1: 20,
        operation: Operation.Subtract,
        n2: 15
      }
    }
    return request(query, admin).expect(res => {
      expect(res.body.data.payload.response).toBe(5)
    })
  })

  it('should multiply', () => {
    query.variables = {
      input: {
        n1: 10,
        operation: Operation.Multiply,
        n2: 15
      }
    }
    return request(query, admin).expect(res => {
      expect(res.body.data.payload.response).toBe(150)
    })
  })

  it('should not multiply with wrong role', () => {
    return request(query, user).expect(res => {
      expect(res.body.errors[0].message).toBe(CODES.UNAUTHORIZED)
    })
  })

  it('should not multiply without user', () => {
    return request(query).expect(res => {
      expect(res.body.errors[0].message).toBe(CODES.UNAUTHENTICATED)
    })
  })
})
