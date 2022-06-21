var express = require('express');
var router = express.Router();
var passport = require('../config/passport.js');

// 로그인 API

router.get('/login', function (req, res) {
  res.render('auth/login');
});

// 로그아웃 API
router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

// 구글로 로그인하기 Router
router.get('/google', passport.authenticate('google', { scope: ['profile'] }),function (req, res) { 
  
  res.header("Access-Control-Allow-Origin", "*")});



// 그리고 passport 로그인 전략에 의해 googleStrategy로 가서 구글계정 정보와 DB를 비교해서 회원가입시키거나 로그인 처리하게 한다.
router.get(
  '/google/callback',
  passport.authenticate('google'),
  authSuccess
);



function authSuccess(req, res) {
  res.redirect('/');
}

module.exports = router;
