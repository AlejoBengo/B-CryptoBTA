"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademyBTAConfig = exports.BTAProtocolConfig = void 0;
const nodemailer = require('nodemailer');
exports.BTAProtocolConfig = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'businesstargetanalytic@gmail.com',
        pass: '. . . . . . . . ',
    },
});
exports.AcademyBTAConfig = nodemailer.createTransport({
    host: 'smtp.1and1.es',
    port: 25,
    secure: false,
    auth: {
        user: 'info@academybta.com',
        pass: 'trader2020$$',
    },
});
