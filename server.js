const express = require('express');
const routes = require('./controllers');
const path = require('path')
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const session = require('express-session');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });
//const favicon = require('serve-favicon')

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

const app = express();
const PORT = process.env.PORT || 3001;



app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
//app.use(favicon(path.join(__dirname,'public','images','favicon-16x16.png')));
app.use(session(sess));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


//ZACK's CODE
// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config()
// }

// const methodOverride = require('method-override')
// const express = require('express')
// const session = require('express-session')
// const flash = require('express-flash')
// const passport = require('passport')
// const bcrypt = require('bcrypt')
// const app = express()

// const users = []

// const initializePassport = require('./passport-config')
// initializePassport(
//   passport,
//   email => users.find(user => user.email === email),
//   id => users.find(user => user.id === id)
// )

// app.set('view-engine', 'ejs')
// app.set('trust proxy', 1)
// app.use(methodOverride('_method'))
// app.use(express.urlencoded({ extended: false }))
// app.use(flash())
// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false
// }))
// app.use(passport.initialize())
// app.use(passport.session())

// app.get('/', checkAuthenticated, (req, res) => {
//   res.render('index.ejs', { name: req.user.name })
// })

// app.get('/register', checkNotAuthenticated, (req, res) => {
//   res.render('register.ejs')
// })

// app.get('/login', checkNotAuthenticated, (req, res) => {
//   res.render('login.ejs')
// })

// app.post('/register', checkNotAuthenticated, async (req, res) => {
//   try {
//       const hashedPassword = await bcrypt.hash(req.body.password, 10)
//       users.push({
//           id: Date.now().toString(),
//           name: req.body.name,
//           email: req.body.email,
//           password: hashedPassword
//       })
//       res.redirect('/login')
//   } catch {
//       res.redirect('/register')
//   }
//   console.log(users)
// })

// app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
//   successRedirect: '/',
//   failureRedirect: '/login',
//   failureFlash: true
// }))

// app.delete('/logout', (req, res) => {
//   req.logOut()
//   res.redirect('/login')
// })

// function checkNotAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//       return res.redirect('/')
//   }
//   next()
// }

// function checkAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//       return next()
//   }
//   res.redirect('/login')
// }

// app.listen(3001)