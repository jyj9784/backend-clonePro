// const dotenv = require('dotenv');
// dotenv.config();
// const express = require('express');
// const authMiddlewareCo = require('../middlewares/auth-middleware-co');

// const router = express.Router();
// const Post = require('../schemas/post');
// const CompanyUser = require('../schemas/companyuser');
// // 기업회원 채용정보 전체조회(로그인 안되도 다 볼 수 있게)
// router.get('/companies/mypages', authMiddlewareCo, async (req, res) => {
//   try {
//     const { user } = res.locals;
//     console.log('user', user);
//     const userid = user[0].userid;
//     console.log('userid', userid);
//     const posts = await Post.findOne({ userid });
//     console.log(posts);
//     const companyinfo = await CompanyUser.findOne({ userid });
//     console.log(companyinfo);
//     const info = {};
//     info.posts = posts;
//     info.companyinfo = companyinfo;
//     res.send(info);
//   } catch (err) {
//     res.status(400).send('채용게시물 조회 오류');
//   }
// });

// module.exports = router;
