import { Schema, model, Document } from 'mongoose';

const schema = new Schema({
  name    : String,
  rut     : String,
  email   : String,
  password: String,
  balance : Number
});

interface IAccount extends Document {
  name    : string;
  rut     : string;
  email   : string;
  password: string;
  balance : number;
}

export default model<IAccount>('Account', schema);