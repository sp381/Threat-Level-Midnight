const router = require('express').Router();
const { User } = require('../../models');
const passport = require('passport');

const initializePassport = require('../../config/passport')
initializePassport(
  passport,
  email => User.find(user => user.email === email),
  id => User.find(user => user.id === id)
)

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


//router.post('/', ..)
    //this is to create a user 
//POST CREATE USER | http://localhost:3001/api/users/
router.post("/", (req, res) => {
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }).then(userData => res.json(userData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });
  

//router.post('/login', ..)
    //this is for post login

router.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/comment-routes',
  failureRedirect: '/login',
  failureFlash: true
}))

router.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.ejs')
})

// this is for the logout

router.delete('/logout', (req, res) => {
  req.logOut()
  res.redirect('/login')
})

// authenticator

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
      return res.redirect('/')
  }
  next()
}

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