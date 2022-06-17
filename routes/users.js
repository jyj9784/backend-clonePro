const express = require('express');
const User = require('../schemas/user');
const CompanyUser = require('../schemas/companyuser');
const router = express.Router();
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.SECRET_KEY;
const dotenv = require('dotenv');
const authMiddleware = require('../middlewares/auth-middleware');
const Bcrypt = require('bcrypt');
dotenv.config();


//회원가입 양식
const postUsersSchema = Joi.object({
  userid: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{2,10}$')).required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{4,20}$'))
  .required(),
  confirmPassword: Joi.string().required(),
  profileimage: Joi.string(),
});

//회원가입 - 개인
router.post('/api/user/signup', async (req, res) => {
  try {
    const { userid, password, confirmPassword username, profileimage, position } =
      await postUsersSchema.validateAsync(req.body);
    // console.log({ userid, password, confirmPassword, profileimage });

    if (password !== confirmPassword) {
      return res.status(400).send({
        errorMessage: '패스워드가 패스워드 확인란과 동일하지 않습니다.',
      });
    }

    const exitstUsers = await User.find({ userid });
    if (exitstUsers.length) {
      return res.status(400).send({
        errorMessage: '중복된 아이디가 존재합니다.',
      });
    }

    const salt = await Bcrypt.genSalt(Number(process.env.SaltKEY));
    const hashPassword = await Bcrypt.hash(password, salt);

    const user = new User({ userid, password: hashPassword, profileimage });
    await user.save();
    res.status(201).send({ message: '회원가입 완성' });
  } catch (error) {
    return res.status(400).send(
      console.error(error)
      // errorMessage: '요청한 데이터 형식이 올바르지 않습니다.',
    );
  }
});



//회원가입 - 기업
router.post('/api/user/company/signup', async (req, res) => {
  try {
    const { userid, password, confirmpassword, profileimage, intro, image, address } =
      await postUsersSchema.validateAsync(req.body);

    if (password !== confirmPassword) {
      return res.status(400).send({
        errorMessage: '패스워드가 패스워드 확인란과 동일하지 않습니다.',
      });
    }

    const exitstUsers = await User.find({ userid });
    if (exitstUsers.length) {
      return res.status(400).send({
        errorMessage: '중복된 아이디가 존재합니다.',
      });
    }

    const salt = await Bcrypt.genSalt(Number(process.env.SaltKEY));
    const hashPassword = await Bcrypt.hash(password, salt);

    const cp_user = new CompanyUser({ userid, password: hashPassword, profileimage, intro, image, address });
    await cp_user.save();
    res.status(201).send({ message: '회원가입 완성' });
  } catch (error) {
    return res.status(400).send(
      console.error(error)
      // errorMessage: '요청한 데이터 형식이 올바르지 않습니다.',
    );
  }
});




//로그인
router.post('/user/login', async (req, res) => {
  const { userid, password } = req.body;
  const user = await User.findOne({ userid });
  const cp_user = await CompanyUser.findOne({ userid });

  if (!user||!cp_user) {
    return res.status(400).send({
      errorMessage: '아이디 또는 비밀번호를 확인해주세요.',
    });
  }

  const validPassword = await Bcrypt.compare(password, user.password);
  // console.log(validPassword);

  if (!validPassword) {
    return res.send('비밀번호가 틀렸습니다..');
  }

  const token = jwt.sign({ userid: user.userid }, process.env.SECRET_KEY);
  res.send({ token });
});












// 정보 조회
router.get('/checkLogin', authMiddleware, async (req, res) => {
  const { user } = res.locals;
  res.send({
    success: '정보 조회가 성공하였습니다.',
    userid: user[0].userid,
    profileimage: user[0].profileimage,
  });
});

module.exports = router;
