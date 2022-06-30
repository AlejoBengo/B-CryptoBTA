"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendPromotion = exports.AcademyBTAConfig = void 0;
require('dotenv').config();
const nodemailer = require('nodemailer');
exports.AcademyBTAConfig = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 25,
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});
const transportator = (MailOptions) => {
    exports.AcademyBTAConfig.sendMail(MailOptions, (err, info) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Email sent to: ', info.accepted);
        }
    });
};
const AcademyPromotion = (to, name) => {
    return {
        from: 'info@academybta.com',
        to: `${to}`,
        subject: '¡Obten un 10% de descuento en cualquier curso de Academy BTA!',
        text: 'nudsfosidfisdif',
    };
};
const sendPromotion = (EmailTo, Name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        transportator(AcademyPromotion(EmailTo, Name));
    }
    catch (err) {
        console.log(err);
    }
});
exports.sendPromotion = sendPromotion;
