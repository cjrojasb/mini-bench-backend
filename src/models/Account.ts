import { Schema, model, Document } from 'mongoose';

const schema = new Schema({
  name    : String,
  rut     : String,
  email   : String,
  password: String
});

interface IAccount extends Document {
  name    : string;
  rut     : string;
  email   : string;
  password: string;
}
-
export default model<IAccount>('Account', schema);