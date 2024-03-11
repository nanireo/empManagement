const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  
  f_sno: Number,
  f_userName: String,
  f_Pwd: String

  // f_userName: { type: String, required: true },
  // f_Pwd: { type: String, required: true }
});

const t_login = mongoose.model('t_login', userSchema);

module.exports = t_login;
