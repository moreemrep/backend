import { Input } from '../../generated/types'
import { Operation, CalculateInput, CalculatePayload } from '../../generated/schema'
import { Context } from '../../types'

exports.resolver = {
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
