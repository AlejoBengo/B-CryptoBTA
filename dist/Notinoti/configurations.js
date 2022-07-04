"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademyBTAConfig = void 0;
const nodemailer = require('nodemailer');
exports.AcademyBTAConfig = nodemailer.createTransport({
    host: 'smtp.1and1.es',
    port: 25,
    auth: {
        user: 'm100843746-144414495',
        pass: 'trader2020$$',
    },
});
