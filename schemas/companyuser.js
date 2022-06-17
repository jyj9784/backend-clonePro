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
        required: true,
      },
    

      profileimage: {
        type: String,
        required:false,
      },

      image: {
        type:String,
        required:true,
      },

      companyname: {

        type:String,
        require:true,
      },
    

      intro: {
        type:String,
        required:true
      },

      address: {
        type:String,
        required:true
      }

});
    
    
    
module.exports = mongoose.model('Companyuser', companyuserSchema);
