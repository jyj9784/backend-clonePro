const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    // 채용정보 게시글 번호
    postingid: {
      type: Number,
      unique: true,
    },
    // 채용정보 작성자 userid
    userid: {
      type: String,
      match: /.+\@.+\..+/,
    },
    // 회사 프로필 이미지
    profileimage: {
      type: String,
    },
    // 회사 이름
    companyname: {
      type: String,
    },
    // 회사 소개
    intro: {
      type: String,
    },
    // 회사 주소
    address: {
      type: String,
    },
    // 회사 국가
    country: {
      type: String,
    },
    // 회사 지역
    region: {
      type: String,
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
    },
    // 채용정보 포지션(프론트엔드(1) or 백엔드(-1))
    position: {
      type: String,
      required: true,
    },
    // 채용공고 상태
    status: {
      type: Boolean,
    },

    // createdAt, updatedAt 자동설정
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);
