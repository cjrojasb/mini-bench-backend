"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const account_controller_1 = require("../controllers/account.controller");
router.route('/accounts')
    .get(account_controller_1.getAccounts)
    .post(account_controller_1.setAccount);
router.route('/accounts/:id')
    .get(account_controller_1.getAccount)
    .delete(account_controller_1.deleteAccount)
    .put(account_controller_1.updateAccount);
exports.default = router;
