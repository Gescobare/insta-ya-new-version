var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Users = require('../models/User.js');
const passport = require('passport');

// route get 

router.get('/', function(req, res, next) {
    Users.find(function (err, client) {
      if (err) return next(err);
      res.json(client);
  });
});  

// route post

router.post("/", (req, res, next) =>{

    passport.authenticate("local-signup", (err, user, info)=>{
      if (err) throw err;
      if (!user) res.json({"Alert":"User Exists"});
      else{
      req.logIn(user, (err)=>{
          res.json({"Alert":"New Registered User"});
          console.log(req.user);
      });
      }      
    })(req, res, next);  
        
});

module.exports = router;