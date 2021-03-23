import { Request, Response } from 'express';
import Account from '../models/Account';
import jwt from 'jsonwebtoken';

export async function getAccount(req: Request, res: Response): Promise<Response> {
  const { rut }  = req.params;
  const account = await Account.findOne({ rut });
  
  return res.json(account);
}

export async function getAccounts(req: Request, res: Response): Promise<Response> {
  const accounts = await Account.find();
  
  return res.json(accounts);
}

export async function setAccount(req: Request, res: Response): Promise<Response> {
  const { name, rut, email, password } = req.body;
  const accountRut = await Account.findOne({ rut });

  if (accountRut !== null) {
    return res.status(401).send('El rut ingresado ya tiene una cuenta asociada.')
  } else {
    const newAccount = {
      name    : name,
      rut     : rut,
      email   : email,
      password: password,
      balance : 0
    };
    const account = new Account(newAccount);
    await account.save();

    return res.json({
      message: 'Account successfully saved',
      account
    });
  }
}

export async function updateAccount(req: Request, res: Response): Promise<Response> {
  const { id }  = req.params;
  const { balance } = req.body;
  const updatedAccount = await Account.findByIdAndUpdate(id, {
    balance
  }, { new: true });

  return res.json({
    message: `Account with ID: ${id} was updated`,
    updatedAccount
  });
}

export async function deleteAccount(req: Request, res: Response): Promise<Response> {
  const { id }  = req.params;
  const account = await Account.findByIdAndRemove(id);

  return res.json({
    message: `Account with ID: ${id} was removed`,
    account
  });
}
