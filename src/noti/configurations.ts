require('dotenv').config();
const nodemailer = require('nodemailer');
const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS } = process.env;

export const AcademyBTAConfig = nodemailer.createTransport({
   host: MAIL_HOST,
   port: MAIL_PORT,
   secure: true,
   auth: {
      user: MAIL_USER,
      pass: MAIL_PASS,
   },
});
