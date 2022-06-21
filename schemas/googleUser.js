const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const { boolean } = require('joi');

const GuserSchema = new mongoose.Schema({
  username: {
    type: String,
  },

  userid: {
    type: String, 
    unique: true,
  },

  profileimage: {
    type: String,
  },

  google: {
    type: Boolean,
  },
});

module.exports = mongoose.model('GUser', GuserSchema);
