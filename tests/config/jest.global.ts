import * as request from 'supertest'
import { app } from 'graphql-api-scripts'

global.request = (query) => request(app).post('/graphql').send(query)

global.requestAuth = (token, query) => request(app).post('/graphql').set('token', token).send(query)
