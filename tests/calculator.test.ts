import { Operation, CalculateInput } from '../src/generated/schema'
import { createQuery } from 'graphql-api-scripts'

const query = createQuery<CalculateInput>(`
mutation ($input: CalculateInput!){
  payload: calculate(input: $input) {
    response
  }
}
`)

describe('mutation calculate', () => {
  it('should sum', async () => {
    query.variables = {
      input: {
        n1: 10,
        operation: Operation.Sum,
        n2: 15
      }
    }
    await global.requestAuth(global.users.registered, query)
      .expect(res => {
        expect(res.body.data.payload.response).toBe(25)
      })

    // test cache
    return global.requestAuth(global.users.registered, query)
      .expect(res => {
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
    return global.requestAuth(global.users.registered, query)
      .expect(res => expect(res.body.data.payload.response).toBe(2))
  })

  it('should subtract', () => {
    query.variables = {
      input: {
        n1: 20,
        operation: Operation.Subtract,
        n2: 15
      }
    }
    return global.requestAuth(global.users.registered, query)
      .expect(res => expect(res.body.data.payload.response).toBe(5))
  })

  it('should mutiply', () => {
    query.variables = {
      input: {
        n1: 10,
        operation: Operation.Multiply,
        n2: 15
      }
    }
    return global.requestAuth(global.users.registered, query)
      .expect(res => expect(res.body.data.payload.response).toBe(150))
  })
})
