// 모듈
const express = require('express');
const router = express.Router();
const Post = require('../schemas/post');
const authMiddleware = require('../middlewares/auth-middleware');

// 채용정보 등록(기업회원 로그인 시 가능)
router.post('/posting', async (req, res) => {

});

// 채용정보 수정(기업회원 로그인 시 가능)
router.put('/posting/:postingid', async (req, res) => {

});

// 채용정보 삭제(기업회원 로그인 시 가능)
router.delete('/posting/:postingid', async (req, res) => {

});
// 채용정보 전체조회
router.get('/posting', async (req, res) => {

});

module.exports = router;