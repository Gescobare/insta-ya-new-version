var mongoose = require('mongoose');
var bcryptjs = require('bcryptjs');

var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  updated_date: { type: Date, default: Date.now },
});

// Encrypt Methods 

UserSchema.methods.encryptPassword = (password) => {

  return  bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));

};

UserSchema.methods.comparePassword = function (password) {

  return bcryptjs.compareSync(password, this.password);

};

module.exports = mongoose.model('User', UserSchema);