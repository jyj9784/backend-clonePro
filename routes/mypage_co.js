// 모듈 및 설정파일
const express = require('express');
const router = express.Router();
const Post = require('../schemas/post');
const CompanyUser = require('../schemas/companyuser');
const authMiddlewareCo = require('../middlewares/auth-middleware-co');

// 회사 마이페이지 조회
router.get('/companies/mypage', authMiddlewareCo, async (req, res) => {
  try {
    const { user } = res.locals;
    const userid = user[0].userid;
    const existsPost = await Post.find({ userid }).sort({
      status: -1,
      postingid: -1,
    });
    const companyinfo = await CompanyUser.find({ userid }, { password: 0 });
    const info = {};
    info.existsPost = existsPost;
    info.companyinfo = companyinfo;
    res.status(200).send(info);
  } catch (err) {
    res.status(400).send('마이페이지 조회 오류');
  }
});

module.exports = router;
