var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Users = require('../models/User.js');
const passport = require('passport');

router.get('/', function(req, res, next) {
    Users.find(function (err, client) {
      if (err) return next(err);
      res.json(client);
  });
});  

router.post("/", (req, res, next) =>{

    passport.authenticate("local-signup", (err, user, info)=>{
      if (err) throw err;
      if (!user) res.json({"Alert":"El usuario ingresado ya existe"});
      else{
      req.logIn(user, (err)=>{
          res.json({"Alert":"Nuevo usuario registrado"});
          console.log(req.user);
      });
      }      
    })(req, res, next);  
        
});

module.exports = router;