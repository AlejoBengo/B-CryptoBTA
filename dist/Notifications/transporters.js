"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transportator = void 0;
const configurations_1 = require("./configurations");
const transportator = (MailOptions) => {
    configurations_1.HenryAskConfig.sendMail(MailOptions, (err, info) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Email sent to: ', info.accepted);
        }
    });
};
exports.transportator = transportator;
