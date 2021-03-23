import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';

export async function logIn(req: Request, res: Response): Promise<Response> {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).send('E-mail invalido')
  } else if (user.password !==  password) {
    return res.status(401).send('Contraseña invalida')
  }

  const token = jwt.sign({ _id: user._id }, 'secretKey');

  return res.status(200).json({
    message: 'User successfully signin',
    user,
    token
  })
}

export async function signUp(req: Request, res: Response): Promise<Response> {
  const { email, password, name, lastName, rut } = req.body;
  
  const newuser = {
    email   : email,
    password: password,
    name    : name,
    lastName: lastName,
    rut     : rut
  };

  const user = new User(newuser);
  await user.save();

  const token = jwt.sign({ _id: user._id }, 'secretKey');

  return res.status(200).json({
    message: 'User successfully saved',
    user,
    token
  })
}