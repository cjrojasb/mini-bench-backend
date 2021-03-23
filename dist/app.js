"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const account_1 = __importDefault(require("./routes/account"));
const user_1 = __importDefault(require("./routes/user"));
const auth_1 = __importDefault(require("./routes/auth"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const auth_2 = require("./middleware/auth");
const app = express_1.default();
// settings
app.set('port', process.env.PORT || 4000);
// middlewares
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(cors_1.default());
// routes
app.use('/api/private', auth_2.verifyToken, account_1.default);
app.use('/api/public', user_1.default);
app.use('/api', auth_1.default);
// folder will be used to store
app.use('/uploads', express_1.default.static(path_1.default.resolve('public')));
exports.default = app;
