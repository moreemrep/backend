import { Repository } from './types'
import { Tedis } from 'tedis'

export interface RedisRepository extends Tedis, Repository {
}

const port = parseInt(process.env.REDIS_PORT)
const host = process.env.REDIS_HOST
const password = process.env.REDIS_PASSWORD

export function RedisRepository (): Repository {
  let tedis: Tedis

  if (password) {
    tedis = new Tedis({
      port,
      host
    })
  } else {
    tedis = new Tedis({
      port,
      host,
      password
    })
  }

  return {
    _disconnect: async () => tedis.close(),
    _clear: async () => console.log('todo: clear redis db'),
    ...tedis
  }
}
