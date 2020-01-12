/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test } from 'supertest'
import { Query } from '../queryBuilder'

export {}

declare global {
  namespace NodeJS {
    interface Global {
      request: (query: Query<any>) => Test;
      requestAuth: (user: string, query: Query<any>) => Test;
    }
  }
}
