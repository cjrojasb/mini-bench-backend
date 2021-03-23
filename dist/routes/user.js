"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const user_controller_1 = require("../controllers/user.controller");
router.route('/users')
    .get(user_controller_1.getUsers);
router.route('/users/:id')
    .get(user_controller_1.getUser);
exports.default = router;
