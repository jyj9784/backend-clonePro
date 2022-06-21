const router = require("express").Router();
const passport = require('passport');

// 카카오로 로그인하기 라우터
router.get('/kakao', passport.authenticate('kakao'));

router.get('/kakao/callback', (req, res, next) => {
    passport.authenticate(
      "kakao",
      { failureRedirect: "/" },
      (err, user) => {
        if (err) return next(err);
        const { id, nickname } = user;
        const token = jwt.sign({ id, nickname }, process.env.TOKENKEY, { expiresIn: '2h'});
        result = {
          token,
          id: user.id,
          nickname: user.nickname,
        };
        res.send({ user: result });
      }
    )(req, res, next);
  });

 module.exports = router;