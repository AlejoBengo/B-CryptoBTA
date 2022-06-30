"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./RoutingSource/index');
const morgan = require('morgan');
const server = express();
require('./DBSource/db');
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((_req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
server.set('port', process.env.PORT || 3004);
server.use(express.json());
server.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads',
}));
server.use('/', routes);
module.exports = server;
