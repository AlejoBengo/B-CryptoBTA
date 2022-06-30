"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
const index_1 = __importDefault(require("./RoutingSource/index"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const server = (0, express_1.default)();
require('./DBSource/db');
server.use(body_parser_1.default.urlencoded({ extended: true, limit: '50mb' }));
server.use(body_parser_1.default.json({ limit: '50mb' }));
server.use((0, cookie_parser_1.default)());
server.use((0, morgan_1.default)('dev'));
server.use((_req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
server.set('port', process.env.PORT || 3004);
server.use(express_1.default.json());
server.use((0, express_fileupload_1.default)({
    useTempFiles: true,
    tempFileDir: './uploads',
}));
server.use('/', index_1.default);
server.use('/', index_1.default);
module.exports = server;
