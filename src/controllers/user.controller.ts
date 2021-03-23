import { Request, Response } from 'express';
import User from '../models/User';

export async function getUser(req: Request, res: Response): Promise<Response> {
  const { id }  = req.params;
  const user = await User.findOne({ _id: id });

  return res.json(user);
}

export async function getUsers(req: Request, res: Response): Promise<Response> {
  const users = await User.find();
  
  return res.json({
    users
  });
}