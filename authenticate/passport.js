const passport = require('passport');
const LocalStrategy = require ('passport-local').Strategy

const User = require('../models/User.js')

// Serializar

passport.serializeUser((user, done) => {
    done(null, user.id);
}); 

// Deserializar

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
}); 

// Authentication Methods Signup

passport.use('local-signup', new LocalStrategy({ 
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done)=>{

    const user = await User.findOne({email:email});
    if(user){
        return done(null, false, req.flash('signupMessage','El correo ingresado ya esta registrado'));
    }else{
        const newUser = new User();
        newUser.name = req.body.name;
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);
        await newUser.save();
        done(null, newUser)    
    }
}));

// Authentication Methods Login

passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true 
}, async(req, email, password, done)=>{
    const user = await User.findOne({email:email});
    if(!user){
        return done(null, false, req.flash('signupMessage','Usuario no encontrado'))
    }else{
        if(!user.comparePassword(password)){
            return done(null, false, req.flash('signupMessage','Contraseña incorrecta'))
        }
    }
    done(null, user);
}));