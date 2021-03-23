"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    name: String,
    rut: String,
    email: String,
    password: String,
    balance: Number
});
exports.default = mongoose_1.model('Account', schema);
