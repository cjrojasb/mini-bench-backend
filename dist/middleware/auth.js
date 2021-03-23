"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Acccess denied');
    }
    const token = req.headers.authorization.split(' ')[1];
    if (token === 'null') {
        return res.status(401).send('Acccess denied');
    }
    const payload = jsonwebtoken_1.default.verify(token, 'secretKey');
    next();
}
exports.verifyToken = verifyToken;
;
