"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.academyTransporter = void 0;
const configuration_1 = require("./configuration");
const academyTransporter = (MailOptions) => {
    configuration_1.AcademyBTAConfig.sendMail(MailOptions, (err, info) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Email sent to: ', info.accepted);
        }
    });
};
exports.academyTransporter = academyTransporter;
