const passport = require('passport');
// const local = require('./localStrategy'); // 로컬서버로 로그인할때
const kakao = require('./kakaoStrategy'); // 카카오서버로 로그인할때

const User = require('../schemas/users');

module.exports = () => {
  // serialize는 어떤 정보를 쿠키에 주느냐를 의미
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  // deserialize는 쿠키에 저장되어있는 userid로 어떻게 사용자를 찾느냐는 의미
  passport.deserializeUser((id, done) => {
    User.findOne({ where: { id } })
      .then((user) => done(null, user))
      .catch((err) => done(err));
  });

  //    local();
  kakao(); // 카카오 전략 등록
};
