import * as request from 'supertest'
import { app } from 'graphql-api-scripts'

global.request = (query, token) => token ? request(app).post('/graphql').set('token', token).send(query) : request(app).post('/graphql').send(query)

global.users = {
  unregistered: JSON.stringify({ uid: '12', email: 'new@test.com' }),
  admin: JSON.stringify({ uid: '123', email: 'admin@test.com' }),
  manager: JSON.stringify({ uid: '1234', email: 'manager@test.com' }),
  user: JSON.stringify({ uid: '12345', email: 'user@test.com' })
}
