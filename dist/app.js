"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./routes/index"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
// settings
app.set('port', process.env.PORT || 4000);
// middlewares
app.use(morgan_1.default('dev'));
// routes
app.use('/api', index_1.default);
// folder will be used to store
app.use('/uploads', express_1.default.static(path_1.default.resolve('public')));
exports.default = app;
