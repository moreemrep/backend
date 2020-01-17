import { Operation, CalculateInput, CalculatePayload } from '../../generated/schema'
import { Input } from 'graphql-api-scripts'
import { Context } from '../../generated/types'

export const resolver = {
  Mutation: {
    calculate: async (_, { input }: Input<CalculateInput>, context: Context): Promise<CalculatePayload> => {
      let response = 0

      const { n1, n2, operation } = input
      switch (operation) {
        case Operation.Sum:
          response = n1 + n2
          break

        case Operation.Subtract:
          response = n1 - n2
          break

        case Operation.Divide:
          response = n1 / n2
          break

        case Operation.Multiply:
          response = n1 * n2
          break
      }

      return {
        response
      }
    }
  }
}
