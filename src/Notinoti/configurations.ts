const nodemailer = require('nodemailer');

export const AcademyBTAConfig = nodemailer.createTransport({
   host: 'smtp.1and1.es',
   port: 25,
   auth: {
      user: 'm100843746-144414495',
      pass: 'trader2020$$',
   },
});
