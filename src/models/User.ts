import { Schema, model, Document } from 'mongoose';

const schema = new Schema({
  name    : String,
  lastName: String,
  rut     : String,
  email   : String,
  password: String
}, {
  timestamps: true
});

interface IUser extends Document {
  name    : string;
  lastName: string;
  rut     : string;
  email   : string;
  password: string;
}

export default model<IUser>('User', schema);