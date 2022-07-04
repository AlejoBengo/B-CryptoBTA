const nodemailer = require('nodemailer');

export const AcademyBTAConfig = nodemailer.createTransport({
   host: 'smtp.1and1.es',
   auth: {
      user: 'info@academybta.com',
      pass: 'trader2020$$',
   },
});
