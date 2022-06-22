// 모듈 및 설정파일
const express = require('express');
const router = express.Router();
const Message = require('../schemas/messages');
const authMiddleware = require('../middlewares/auth-middleware');

//커뮤니티 페이지 조회
router.get('/communities', authMiddleware, async (req, res) => {
    try {
      const { user } = res.locals;
      const username = user[0].username;
      const profileimage = user[0].profileimage;
      res.json({ username, profileimage });
    } catch (err) {
      res.status(400).send('정보 전달 오류');
    }
  });
  
  //채팅조회
  router.get('/chat/lists', async (req, res) => {
    await Message.find().exec((err, result) => {
      if (err) return res.send(null);
      res.send(result);
    });
  });

  module.exports = router;