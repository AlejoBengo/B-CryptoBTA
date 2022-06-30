"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.academyTransportator = exports.transportator = void 0;
const configurations_1 = require("./configurations");
const transportator = (MailOptions) => {
    configurations_1.BTAProtocolConfig.sendMail(MailOptions, (err, info) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Email sent to: ', info.accepted);
        }
    });
};
exports.transportator = transportator;
const academyTransportator = (MailOptions) => {
    console.log('ANTES');
    configurations_1.AcademyBTAConfig.sendMail(MailOptions, (err, info) => {
        console.log('DURANTE');
        if (err) {
            console.log('SI');
            console.log(err);
        }
        else {
            console.log('NO');
            console.log('Email sent to: ', info.accepted);
        }
    });
    console.log('DESPUES');
};
exports.academyTransportator = academyTransportator;
