import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export function verifyToken(req: Request, res: Response, next: NextFunction) {
  if (!req.headers.authorization) {
    return res.status(401).send('Acccess denied');
  }

  const token = req.headers.authorization.split(' ')[1];
  if (token === 'null') {
    return res.status(401).send('Acccess denied');
  }

  const payload = jwt.verify(token, 'secretKey');
  next();
};