"use strict";
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kikridu@gmail.com',
    pass: 'pinguinos'
  }
});

let mailOptions = {
  from: 'kikridu@gmail.com',
  to: 'kikridu@hotmail.com',
  subject: 'Testing',
  text: 'Jalo wey'

};

transporter.sendMail(mailOptions, function(err, data) {
  if (err) {
    console.log('error')
  } else {
    console.log('email sent')
  }
})