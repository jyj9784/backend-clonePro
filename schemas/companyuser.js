const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const companyuserSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },

  profileimage: {
    type: String,
    
  },

  image: {
    type: String,
  },

  companyname: {
    type: String,
  },

  intro: {
    type: String,
  },

  address: {
    type: String,
  },
});

module.exports = mongoose.model('Companyuser', companyuserSchema);
