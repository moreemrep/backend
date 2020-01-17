import { app, repositories } from 'graphql-api-scripts'
import { Repositories } from '../../src/repositories/repositories'
import { Server } from 'http'

const { mongoose, redis }: Repositories = repositories
const { User } = mongoose

let instance: Server

beforeAll(done => {
  instance = app.listen(done)
})

beforeEach(async done => {
  await User.create({ uid: '123', email: 'test@test.com' })
  done()
})

afterEach(async done => {
  await mongoose._clear()
  await redis._clear()
  done()
})

afterAll(async done => {
  await mongoose._disconnect()
  await redis._disconnect()
  instance.close(done)
})
