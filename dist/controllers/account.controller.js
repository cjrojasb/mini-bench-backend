"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAccount = exports.updateAccount = exports.setAccount = exports.getAccounts = exports.getAccount = void 0;
const Account_1 = __importDefault(require("../models/Account"));
async function getAccount(req, res) {
    const { rut } = req.params;
    const account = await Account_1.default.findOne({ rut });
    return res.json(account);
}
exports.getAccount = getAccount;
async function getAccounts(req, res) {
    const accounts = await Account_1.default.find();
    return res.json(accounts);
}
exports.getAccounts = getAccounts;
async function setAccount(req, res) {
    const { name, rut, email, password } = req.body;
    const accountRut = await Account_1.default.findOne({ rut });
    if (accountRut !== null) {
        return res.status(401).send('El rut ingresado ya tiene una cuenta asociada.');
    }
    else {
        const newAccount = {
            name: name,
            rut: rut,
            email: email,
            password: password,
            balance: 0
        };
        const account = new Account_1.default(newAccount);
        await account.save();
        return res.json({
            message: 'Account successfully saved',
            account
        });
    }
}
exports.setAccount = setAccount;
async function updateAccount(req, res) {
    const { id } = req.params;
    const { balance } = req.body;
    const updatedAccount = await Account_1.default.findByIdAndUpdate(id, {
        balance
    }, { new: true });
    return res.json({
        message: `Account with ID: ${id} was updated`,
        updatedAccount
    });
}
exports.updateAccount = updateAccount;
async function deleteAccount(req, res) {
    const { id } = req.params;
    const account = await Account_1.default.findByIdAndRemove(id);
    return res.json({
        message: `Account with ID: ${id} was removed`,
        account
    });
}
exports.deleteAccount = deleteAccount;
