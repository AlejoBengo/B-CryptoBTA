const nodemailer = require('nodemailer');

export const BTAProtocolConfig = nodemailer.createTransport({
   service: 'gmail',
   auth: {
      user: 'businesstargetanalytic@gmail.com',
      pass: '. . . . . . . . ',
   },
});

export const AcademyBTAConfig = nodemailer.createTransport({
   host: 'smtp.1and1.es',
   port: 25,
   secure: false,
   auth: {
      user: 'info@academybta.com',
      pass: 'trader2020$$',
   },
});
