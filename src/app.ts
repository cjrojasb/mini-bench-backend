import express from 'express';
import morgan from  'morgan';
import AccountRoutes from './routes/account';
import UserRoutes from './routes/user';
import AuthRoutes from './routes/auth';
import path from 'path';
import cors from 'cors';
import { verifyToken }from './middleware/auth'
const app = express();

// settings
app.set('port', process.env.PORT || 4000);


// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// routes
app.use('/api/private', verifyToken ,AccountRoutes);
app.use('/api/public', UserRoutes);
app.use('/api', AuthRoutes);

// folder will be used to store
app.use('/uploads', express.static(path.resolve('public')));

export default app;
