"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademyBTAConfig = void 0;
const nodemailer = require('nodemailer');
exports.AcademyBTAConfig = nodemailer.createTransport({
    host: 'smtp.1and1.es',
    auth: {
        user: 'info@academybta.com',
        pass: 'trader2020$$',
    },
});
