/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test } from 'supertest'
import { Query } from 'graphql-api-scripts'

export {}

declare global {
  namespace NodeJS {
    interface Global {
      request: (query: Query<any>, token?: string) => Test;
      users: {
        admin: string;
        manager: string;
        user: string;
        unregistered: string;
      };
    }
  }
}
