"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = exports.logIn = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
async function logIn(req, res) {
    const { email, password } = req.body;
    const user = await User_1.default.findOne({ email });
    if (!user) {
        return res.status(401).send('E-mail invalido');
    }
    else if (user.password !== password) {
        return res.status(401).send('Contraseña invalida');
    }
    const token = jsonwebtoken_1.default.sign({ _id: user._id }, 'secretKey');
    return res.status(200).json({
        message: 'User successfully signin',
        user,
        token
    });
}
exports.logIn = logIn;
async function signUp(req, res) {
    const { email, password, name, lastName, rut } = req.body;
    const newuser = {
        email: email,
        password: password,
        name: name,
        lastName: lastName,
        rut: rut
    };
    const user = new User_1.default(newuser);
    await user.save();
    const token = jsonwebtoken_1.default.sign({ _id: user._id }, 'secretKey');
    return res.status(200).json({
        message: 'User successfully saved',
        user,
        token
    });
}
exports.signUp = signUp;
