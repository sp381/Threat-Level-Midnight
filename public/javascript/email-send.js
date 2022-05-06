const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'threatlevelmidnight2022@gmail.com',
        pass: 'kmimhvgdkckrewuv'
    },
    tls: {
        rejectUnauthorized: false
    }
});

let mailOptions = {
    from: 'threatlevelmidnight2022@gmail.com',
    to: 'kikridu@gmail.com',
    subject: 'Testing',
    text: 'Jalo wey',
    html: '<p>este es el bueno!</p>'

};


transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
        console.log('error')
    } else {
        console.log('email sent')
    }
})