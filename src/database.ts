import { connect } from 'mongoose';

export async function startConnection() {
  await connect('mongodb://localhost/photo-galery-db', {
    useNewUrlParser: true
  });
  console.log('Database is connected');
}
