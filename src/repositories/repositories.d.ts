import { MongooseRepository } from './mongoose-repository'
import { RedisRepository } from '../plugins/repository/redis-repository-plugin'

export interface Repositories {
  mongoose: MongooseRepository;
  redis: RedisRepository;
}
