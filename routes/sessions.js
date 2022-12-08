var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/', function(req, res, next) {
    res.send("Hola")
});  

router.post("/", (req, res, next) =>{

    passport.authenticate("local-login", (err, user, info)=>{
        if (err) throw err;
       if (!user) res.json({"Alert":"El usuario no existe"});
        else{
        req.logIn(user, (err)=>{
            res.json({"Alert":"Inicio de sesión exitoso"});
            console.log(req.user);
        });
        }      
    })(req, res, next);   
        
});

module.exports = router;