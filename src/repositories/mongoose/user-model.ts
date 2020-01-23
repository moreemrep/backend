import { Mongoose, Document, Model } from 'mongoose'
import { Role } from '../../generated/schema'

interface User extends Document {
  uid: string;
  email: string;
  role: Role;
}

export type UserModel = Model<User>

export default (mongoose: Mongoose): UserModel => {
  const { Schema, model } = mongoose

  const schema = new Schema<UserModel>({
    uid: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: [Role.Admin, Role.Manager, Role.User],
      default: Role.User
    }
  }, { timestamps: true })

  schema.index({ uid: 'text' }, { unique: true })

  return model('User', schema)
}
