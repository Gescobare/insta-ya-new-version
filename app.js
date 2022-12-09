var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');

mongoose.connect('mongodb+srv://PabloMesa:RekWHOKJPfG43ivn@database.lajxw1s.mongodb.net/?retryWrites=true&w=majority')
  .then((x) => console.log(`Conectado a la BD: "${x.connections[0].name}"`))
  .catch((err) => console.error(err));

var order = require('./routes/order');
var users = require('./routes/users');
var sessions = require('./routes/sessions')

var app = express();
require('./authenticate/passport'); // Passport

//session

app.use(session({
  secret: '0bbvvjjhhffdd2255881',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.session());

// middlewares

app.use(flash());
app.use(logger('dev'));
app.use(passport.initialize());

// flash Message

app.use((req, res, next) => {
  app.locals.signupMesagge = req.flash('signupMesagge')
  next()
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/order', order);
app.use('/api/users', users);
app.use('/api/sessions', sessions)

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send('<h2>LO SENTIMOS!</h2><h3>No tiene permisos suficientes.</h3><a href="/">Inicio de sesión</a>');
});

module.exports = app;
