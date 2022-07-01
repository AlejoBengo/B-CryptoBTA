"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HenryAskConfig = void 0;
require('dotenv').config();
const nodemailer = require('nodemailer');
const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS } = process.env;
// export const AcademyBTAConfig = nodemailer.createTransport({
//    host: MAIL_HOST,
//    port: MAIL_PORT,
//    secure: false,
// auth: {
//    user: MAIL_USER,
//    pass: MAIL_PASS,
// },
// });
exports.HenryAskConfig = nodemailer.createTransport({
    host: 'smtp.1and1.es',
    auth: {
        user: 'info@academybta.com',
        pass: 'trader2020$$',
    },
});
