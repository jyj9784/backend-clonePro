require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../schemas/user');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const [tokenType, tokenValue] = authorization.split(' ');
  // console.log(tokenType, tokenValue);

  if (tokenType !== 'Bearer') {
    return res.status(401).send({
      errorMessage: '로그인 후 사용하세요.',
    });
  }

  try {
    console.log(tokenValue);
    const { userid } = jwt.verify(tokenValue, process.env.SECRET_KEY);
    console.log(userid);
    User.find({ userid }).then((user) => {
      res.locals.user = user;
      next();
    });
  } catch (error) {
    return res.status(401).send({
      errorMessage: error.message,
    });
  }
};
