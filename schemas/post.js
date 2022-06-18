const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
        // 채용정보 게시글 번호
        postingid: {
            type: Number,
            required: true,
            unique: true,
        },
        // 채용정보 작성자 userid
        userid: {
            type: String,
            required: true,
        },
        // 채용정보 썸네일
        thumbnail: {
            type: String,
            required: true,
        },
        // 채용정보 제목
        title: {
            type: String,
            required: true,
        },
        // 채용정보 주요업무
        maincontent: {
            type: String,
            required: true,
        },
        // 채용정보 자격요건
        subcontent: {
            type: String,
            required: true,
        },
        // 채용정보 이미지
        userimage: {
            type: Array,
            default: [],
            required: true,
        },
        // 채용정보 포지션(프론트엔드(1) or 백엔드(-1))
        position: {
            type: String,
            required: true,
        },   
    },
    // createdAt, updatedAt 자동설정
    { timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);