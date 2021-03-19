import express from 'express';
import morgan from  'morgan';
import Indexroutes from './routes/index';
import path from 'path';

const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/api', Indexroutes);

// folder will be used to store
app.use('/uploads', express.static(path.resolve('public')));

export default app;
