/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test } from 'supertest'
import { Query } from 'graphql-api-scripts'

export {}

declare global {
  namespace NodeJS {
    interface Global {
      request: (query: Query<any>) => Test;
      requestAuth: (user: string, query: Query<any>) => Test;
      users: {
        registered: string;
      };
    }
  }
}
