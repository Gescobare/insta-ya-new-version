var express = require('express');
var router = express.Router();
const passport = require('passport');

// route get

router.get('/', function(req, res, next) {
    res.send("hola")
});  

// route post

router.post("/", (req, res, next) =>{

    passport.authenticate("local-login", (err, user, info)=>{
        if (err) throw err;
       if (!user) res.json({"Alert":"No user Exists"});
        else{
        req.logIn(user, (err)=>{
            res.json({"Alert":"Succefully Authenticated"});
            console.log(req.user);
        });
        }      
    })(req, res, next);   
        
});

module.exports = router;