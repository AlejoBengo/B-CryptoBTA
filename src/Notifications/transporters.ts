import { AcademyBTAConfig } from './configuration';

export const academyTransporter = (MailOptions: any) => {
   AcademyBTAConfig.sendMail(MailOptions, (err: any, info: any) => {
      if (err) {
         console.log(err);
      } else {
         console.log('Email sent to: ', info.accepted);
      }
   });
};
