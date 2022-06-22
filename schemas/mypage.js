const mongoose = require('mongoose');
const MypageSchema = new mongoose.Schema({
    userid: {
        type: String,
    },
    markList: {
        type: Object 
    }
});
module.exports = mongoose.model('mypage', MypageSchema);