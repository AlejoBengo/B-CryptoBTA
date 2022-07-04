"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HenryAskConfig = void 0;
const nodemailer = require('nodemailer');
exports.HenryAskConfig = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'henryaskhenry@gmail.com',
        pass: 'taozxjqwaallnnla',
    },
});
