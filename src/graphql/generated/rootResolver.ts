import { fromGlobalId, toGlobalId } from 'graphql-relay'

exports.resolver = {
  Node: {
    __resolveType: ({ type }) => type,
    id: ({ id, type }) => toGlobalId(type, id)
  },
  Query: {
    node: (_, { id }) => fromGlobalId(id)
  }
}
