"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transportator = void 0;
const configurations_1 = require("./configurations");
// export const transportator = (MailOptions: any) => {
//    BTAProtocolConfig.sendMail(MailOptions, (err: any, info: any) => {
//       if (err) {
//          console.log(err);
//       } else {
//          console.log('Email sent to: ', info.accepted);
//       }
//    });
// };
const transportator = (MailOptions) => {
    configurations_1.AcademyBTAConfig.sendMail(MailOptions, (err, info) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Email sent to: ', info.accepted);
        }
    });
};
exports.transportator = transportator;
