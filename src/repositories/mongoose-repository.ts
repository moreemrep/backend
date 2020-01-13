import { UserModel } from './mongoose/user-model'
import { MongooseRepository} from 'mongoose-repository-plugin';
import { Repository } from 'graphql-api-scripts';

export interface MongooseRepository extends Repository {
  User: UserModel;
}

export default MongooseRepository('mongoose', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
