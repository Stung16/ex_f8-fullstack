"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "kieuduytung3@gmail.com",
    pass: "towo qzlr rtyz plio",
  },
});

const sendMail = async (to, subject, message) => {
  const info = await transporter.sendMail({
    from: '"F8-Fullstack-K2" <kieuduytung3@gmail.com>', // sender address
    to,
    subject,
    html: message, // html body
  });
  return info;
};
module.exports = sendMail;
