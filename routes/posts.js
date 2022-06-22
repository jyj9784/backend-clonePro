// 모듈 및 설정파일
const express = require('express');
const router = express.Router();
const postController = require('../controller/posts');
const authMiddlewareCo = require('../middlewares/auth-middleware-co');

// 채용정보 등록(기업회원 로그인 시 가능)
router.post('/postings', authMiddlewareCo, postController.recruitpost);

// 채용정보 수정(기업회원 로그인 시 가능)
router.put(
  '/postings/:postingid',
  authMiddlewareCo,
  postController.recruitfixment
);

// 채용정보 상태 수정(기업회원 로그인 시 가능)
router.patch(
  '/postings/:postingid',
  authMiddlewareCo,
  postController.recruitstatusfixment
);

// 채용정보 삭제(기업회원 로그인 시 가능)
router.delete(
  '/postings/:postingid',
  authMiddlewareCo,
  postController.recruitdelete
);

// 채용정보 전체조회
router.get('/postings', postController.recruitget);

module.exports = router;
