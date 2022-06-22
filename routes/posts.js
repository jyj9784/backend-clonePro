// 모듈 및 설정파일
const express = require('express');
const router = express.Router();
const postController = require("../controller/posts");

// const Post = require('../schemas/post');
// const CompanyUser = require('../schemas/companyuser');
const authMiddlewareCo = require('../middlewares/auth-middleware-co');

// 채용정보 등록(기업회원 로그인 시 가능)
router.post('/postings', authMiddlewareCo, postController.recruitpost) 

// 채용정보 수정(기업회원 로그인 시 가능)
router.put('/postings/:postingid', authMiddlewareCo, postController.recruitfixment)
 
  // try {
  //   const { postingid } = req.params;
  //   const { thumbnail, title, maincontent, subcontent, userimage, position } =
  //     req.body;
  //   const { user } = res.locals;
  //   const userid = user[0].userid;
  //   const list = await Post.findOne({ postingid });

  //   if (userid === list.userid) {
  //     await Post.updateOne({ postingid }, { $set: req.body });
  //     res.status(201).send({ success: true });
  //   } else {
  //     res.status(403).send('수정 권한이 없습니다.');
  //   }
  // } catch {
  //   res.status(400).send('채용정보 수정 오류');
  // }


// 채용정보 상태 수정(기업회원 로그인 시 가능)
router.patch('/postings/:postingid', authMiddlewareCo, postController.recruitstatusfixment) 
  // try {
  //   const { postingid } = req.params;
  //   const { status } = req.body;
  //   const { user } = res.locals;
  //   const userid = user[0].userid;
  //   const list = await Post.findOne({ postingid });

  //   if (userid === list.userid) {
  //     await Post.updateOne({ postingid }, { $set: req.body });
  //     res.status(201).send({ success: true });
  //   } else {
  //     res.status(403).send('상태 수정 권한이 없습니다.');
  //   }
  // } catch {
  //   res.status(400).send('채용정보 수정 오류');
  // }

// 채용정보 삭제(기업회원 로그인 시 가능)
router.delete('/postings/:postingid', authMiddlewareCo, postController.recruitdelete) 

// 채용정보 전체조회
router.get('/postings', postController.recruitget) 


module.exports = router;
