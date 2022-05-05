"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  
  let transporter = 'kikridu@gmail.com'

  let info = await transporter.sendMail({
    to: "kikridu@hotmail.com",
    subject: 'Hello',
    text: 'Hello world',
    html: "<p>Hello World</p>"
  }) 
}

main().catch(console.error);