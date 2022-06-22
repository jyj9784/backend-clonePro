const mongoose = require('mongoose');
const MypageSchema = new mongoose.Schema({
    userid: {
        type: String,
    },
    markList: {
        type: Array 
    }
});
module.exports = mongoose.model('mypage', MypageSchema);