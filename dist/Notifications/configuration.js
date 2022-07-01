"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademyBTAConfig = void 0;
require('dotenv').config();
const nodemailer = require('nodemailer');
const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS } = process.env;
exports.AcademyBTAConfig = nodemailer.createTransport({
    host: MAIL_HOST,
    port: MAIL_PORT,
    secure: false,
    auth: {
        user: MAIL_USER,
        pass: MAIL_PASS,
    },
});