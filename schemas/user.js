const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    required: true,
  },
  profileimage: {
    type: String,
    required:false,
  },

  position: {
    type:Number,
    required:true
  }




});

module.exports = mongoose.model('User', userSchema);
