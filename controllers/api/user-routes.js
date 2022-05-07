const router = require('express').Router();
const { User } = require('../../models');
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


router.get('/', (req, res) => {
    User.findAll({
        attributes: {exclude: ['password']}
    })
    .then(userData => res.json(userData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  });
  
  router.post('/', (req, res) => {
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    .then((userInfo) => {
      req.session.save(() => {
        req.session.user_id = userInfo.id;
        req.session.username = userInfo.username;
        req.session.loggedIn = true;
        
        res.json(userInfo)
      });
    })
    .then(() => {
        let mailOptions = {
            from: 'threatlevelmidnight2022@gmail.com',
            to: req.body.email,
            subject: 'Welcome aboard!',
            text: 'Welcome Email',
            html: `<p>Welcome to Threat Level Midnight!</p>
            <p>This is a safe space for you to bash on movies</p>
            <p>Feel free to comment on any or reply to this email w/ suggestions</p>
            <p>From: Sarah, Carl, Evin, Francisco & Zachary</p>`
        
        };
        
        
        transporter.sendMail(mailOptions, function (err, data) {
            if (err) {
                console.log('error')
            } else {
                console.log('Email sent successfully!')
            }
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});




//const bcrypt = require('bcrypt')
// const users = []

// app.get('/users', (req, res) => {
//     res.json(users)
// })

// app.post('/users', async (req, res) => {
//     try {
//         const hashedPassword = await bcrypt.hash(req.body.password, 10)
//         const user = { name: req.body.name, password: hashedPassword }
//         users.push(user)
//         res.status(201).send()
//     } catch {
//         res.status(500).send()
//     }
// })

// app.post('/users/login', async (req, res) => {
//     const user = users.find(user => user.name = req.body.name)
//     if (user == null) {
//         return res.status(400).send('Cannot find user')
//     }
//     try {
//         if(await bcrypt.compare(req.body.password, user.password)) {
//             res.send('Success')
//         } else {
//             res.send('Not Allowed')
//         }
//     } catch {
//         res.status(500).send()
//     }
// })



module.exports = router;