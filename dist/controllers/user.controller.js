"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.getUser = void 0;
const User_1 = __importDefault(require("../models/User"));
async function getUser(req, res) {
    const { id } = req.params;
    const user = await User_1.default.findOne({ _id: id });
    return res.json(user);
}
exports.getUser = getUser;
async function getUsers(req, res) {
    const users = await User_1.default.find();
    return res.json({
        users
    });
}
exports.getUsers = getUsers;
