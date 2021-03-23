"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const auth_controller_1 = require("../controllers/auth.controller");
router.route('/auth/signup')
    .post(auth_controller_1.signUp);
router.route('/auth/login')
    .post(auth_controller_1.logIn);
exports.default = router;
