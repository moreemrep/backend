import * as mongoose from 'mongoose'
import { requireFolder } from 'folder-utils'
import * as path from 'path'
import { Repository } from './types'

export function MongooseRepository (modelsFolder: string, options?: mongoose.ConnectionOptions): Repository {
  requireFolder(path.join(process.cwd(), 'src/repositories', modelsFolder), '-model', { mode: process.env.NODE_ENV === 'production' ? 'js' : 'ts', inject: mongoose })

  mongoose
    .connect(process.env.MONGO_URI, options)
    .catch(err => console.log(err))

  return {
    _disconnect: async () => mongoose.disconnect(),
    _clear: async () => mongoose.connection.dropDatabase(),
    ...mongoose.models
  }
}
