import { Mongoose, Document, Model } from 'mongoose'

export interface User extends Document {
  uid: string;
  email: string;
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
    }
  }, { timestamps: true })

  schema.index({ uid: 'text' }, { unique: true })

  return model('User', schema)
}
