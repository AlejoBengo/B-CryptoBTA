"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.academyTransportator = void 0;
const configurations_1 = require("./configurations");
const academyTransportator = (MailOptions) => {
    configurations_1.AcademyBTAConfig.sendMail(MailOptions, (err, info) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Email sent to: ', info.accepted);
        }
    });
};
exports.academyTransportator = academyTransportator;
