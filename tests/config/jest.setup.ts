import { app, repositories } from 'graphql-api-scripts'
import { Repositories } from '../../src/repositories/repositories'
import { Server } from 'http'

const { mongoose, redis }: Repositories = repositories

let instance: Server

beforeAll(done => {
  instance = app.listen()
  done()
})

afterAll(async done => {
  await mongoose._disconnect()
  await redis._disconnect()
  instance.close(done)
})
