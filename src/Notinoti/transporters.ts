import { HenryAskConfig } from './configurations';

export const academyTransportator = (MailOptions: any) => {
   HenryAskConfig.sendMail(MailOptions, (err: any, info: any) => {
      if (err) {
         console.log(err);
      } else {
         console.log('Email sent to: ', info.accepted);
      }
   });
};
