import { UserModel } from './mongoose/user-model'
import { Repository } from '../plugins/repository/types'
import { MongooseRepository } from '../plugins/repository/mongoose-repository-plugin'

export interface MongooseRepository extends Repository {
  User: UserModel;
}

export default MongooseRepository('mongoose', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
