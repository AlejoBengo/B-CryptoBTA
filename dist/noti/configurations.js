"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademyBTAConfig = void 0;
require('dotenv').config();
const nodemailer = require('nodemailer');
const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS } = process.env;
exports.AcademyBTAConfig = nodemailer.createTransport({
    host: 'smtp.1and1.es',
    port: 465,
    secure: true,
    auth: {
        user: 'cursos@academybta.com',
        pass: 'trader2020$$',
    },
});
