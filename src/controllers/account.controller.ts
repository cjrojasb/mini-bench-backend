import { Request, Response } from 'express';
import Account from '../models/Account';

export async function getAccount(req: Request, res: Response): Promise<Response> {
  const { id }  = req.params;
  const account = await Account.findById(id);

  return res.json(account);
}

export async function getAccounts(req: Request, res: Response): Promise<Response> {
  const accounts = await Account.find();
  
  return res.json(accounts);
}

export async function setAccount(req: Request, res: Response): Promise<Response> {
  const { name, rut, email, password } = req.body;
  const newAccount = {
    name : name,
    rut  : rut,
    email: email,
    password: password
  };
  const account = new Account(newAccount);
  await account.save();

  return res.json({
    message: 'Account successfully saved',
    account
  });
}

export async function updateAccount(req: Request, res: Response): Promise<Response> {
  const { id }  = req.params;
  const { name, rut, email, password } = req.body;
  const updatedAccount = await Account.findByIdAndUpdate(id, {
    name,
    rut,
    email,
    password
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