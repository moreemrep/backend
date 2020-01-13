import { MongooseRepository } from './mongoose-repository'
import { RedisRepositor } from 'redis-repository-plugin';

export interface Repositories {
  mongoose: MongooseRepository;
  redis: RedisRepositor;
}
