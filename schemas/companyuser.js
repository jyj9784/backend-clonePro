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
    type: Array,
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

  country: {
    type: String,
  },

  region: {
    type: String,
  },

  industry: {
    type: String,
  },
});

module.exports = mongoose.model('Companyuser', companyuserSchema);
