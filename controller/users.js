const User = require('../schemas/user');
const CompanyUser = require('../schemas/companyuser');
const Bcrypt = require('bcrypt');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
// const jwtSecret = process.env.SECRET_KEY;
const nodemailer = require('nodemailer');
// const Message = require('../schemas/messages');

const postUsersSchema = Joi.object({
  userid: Joi.string().required().email(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{4,12}$')).required(),
  confirmpassword: Joi.string().required(),
  username: Joi.string().required(),
  profileimage: Joi.string(),
  position: Joi.string().required(),
});

// 회원가입 검증 양식2 - 기업회원
const postUsersSchema2 = Joi.object({
  userid: Joi.string().required().email(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{4,12}$')).required(),
  confirmpassword: Joi.string().required(),
  profileimage: Joi.string(),
  address: Joi.string().required(),
  companyname: Joi.string().required(),
  intro: Joi.string().required(),
  image: Joi.array().required(),
  country: Joi.string().required(),
  region: Joi.string().required(),
  industry: Joi.string().required(),
});

async function signup(req, res) {
  try {
    const {
      userid,
      password,
      confirmpassword,
      username,
      profileimage,
      position,
    } = await postUsersSchema.validateAsync(req.body);

    if (password !== confirmpassword) {
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

    const exitstUsers3 = await CompanyUser.find({ userid });
    if (exitstUsers3.length) {
      return res.status(400).send({
        errorMessage: '중복된 아이디가 존재합니다.',
      });
    }

    const salt = await Bcrypt.genSalt(Number(process.env.SaltKEY));
    const hashPassword = await Bcrypt.hash(password, salt);

    const user = new User({
      userid,
      password: hashPassword,
      profileimage,
      username,
      position,
    });
    await user.save();

    // 메일발송 객체(원래 구글로 하려했으나 네이버로 변경)
    let transporter = nodemailer.createTransport({
      service: 'naver', // 메일 이용할 서비스
      host: 'smtp.naver.com', // SMTP 서버명
      port: 587, // SMTP 포트
      auth: {
        user: process.env.NODEMAILER_USER, // 사용자 이메일
        pass: process.env.NODEMAILER_PASS, // 사용자 패스워드
      },
    });

    // 메일 옵션
    let mailOptions = {
      from: process.env.NODEMAILER_USER, // 메일 발신자
      to: req.body.userid, // 메일 수신자
      // 회원가입 완료하고 축하 메시지 전송할 시
      // to: req.body.userid
      subject: `${req.body.username}님 원티드 회원가입을 축하합니다.`, // 메일 제목
      html: `<h2>${req.body.username}님의 커리어 행복을 응원합니다.</h2>
            <br/>
            <p>취업, 이직부터 커리어 성장, 사이드 프로젝트까지!</p>
            <p>원티드 200% 활용법을 확인해 보세요.</p>
            <p><img src="https://www.venturesquare.net/wp-content/uploads/2022/02/%EC%9B%90%ED%8B%B0%EB%93%9C%EB%9E%A9-789x404.jpg" width=400, height=200/></p>`
    };
    // 메일 발송
    transporter.sendMail(mailOptions, function (err, success) {
      if (err) {
        console.log(err);
      } else {
        console.log('Email sent successfully!');
      }
    });

    res.status(201).send({
      success: true,
      iscompany: false,
      msg: '회원가입을 성공하였습니다',
    });
  } catch (error) {
    return res.status(400).send(
      console.error(error)
      // errorMessage: '요청한 데이터 형식이 올바르지 않습니다.',
    );
  }
}
async function companysignup(req, res) {
  try {
    const {
      userid,
      password,
      confirmpassword,
      companyname,
      profileimage,
      intro,
      image,
      address,
      country,
      region,
      industry,
    } = await postUsersSchema2.validateAsync(req.body);

    if (password !== confirmpassword) {
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

    const exitstUsers2 = await CompanyUser.find({ userid });
    if (exitstUsers2.length) {
      return res.status(400).send({
        errorMessage: '중복된 아이디가 존재합니다.',
      });
    }

    const salt = await Bcrypt.genSalt(Number(process.env.SaltKEY));
    const hashPassword = await Bcrypt.hash(password, salt);

    const cp_user = new CompanyUser({
      userid,
      password: hashPassword,
      profileimage,
      companyname,
      intro,
      image,
      address,
      country,
      region,
      industry,
    });
    await cp_user.save();

    // 메일발송 객체(원래 구글로 하려했으나 네이버로 변경)
    let transporter = nodemailer.createTransport({
      service: 'naver', // 메일 이용할 서비스
      host: 'smtp.naver.com', // SMTP 서버명
      port: 587, // SMTP 포트
      auth: {
        user: process.env.NODEMAILER_USER, // 사용자 이메일
        pass: process.env.NODEMAILER_PASS, // 사용자 패스워드
      },
    });

    // 메일 옵션
    let mailOptions = {
      from: process.env.NODEMAILER_USER, // 메일 발신자
      to: req.body.userid, // 메일 수신자
      // 회원가입 완료하고 축하 메시지 전송할 시
      // to: req.body.userid
      subject: `${req.body.companyname}님 원티드 회원가입을 축하합니다.`, // 메일 제목
      html: `<h2>${req.body.companyname}님의 인재 채용을 응원합니다.</h2>
            <br/>
            <p>딱 맞는 인재부터 숨겨진 인재까지!</p>
            <p>원티드와 함께 스마트한 채용을 확인해 보세요.</p>
            <p><img src="https://www.venturesquare.net/wp-content/uploads/2022/02/%EC%9B%90%ED%8B%B0%EB%93%9C%EB%9E%A9-789x404.jpg" width=400, height=200/></p>`
    };
    // 메일 발송
    transporter.sendMail(mailOptions, function (err, success) {
      if (err) {
        console.log(err);
      } else {
        console.log('Email sent successfully!');
      }
    });
    res.status(201).send({
      success: true,
      iscompany: true,
      msg: '회원가입을 성공하였습니다',
    });
  } catch (error) {
    return res.status(400).send(
      console.error(error)
      // errorMessage: '요청한 데이터 형식이 올바르지 않습니다.',
    );
  }
}

async function login(req, res) {
  try {
    const { userid, password } = req.body;
    const user = await User.findOne({ userid });
    const cp_user = await CompanyUser.findOne({ userid });

    let iscompany = '';

    if (user) {
      iscompany = false;
    }

    if (cp_user) {
      iscompany = true;
    }

    if (!user && !cp_user) {
      return res.status(400).send({
        errorMessage: '아이디 또는 비밀번호를 확인해주세요.',
      });
    }

    let validPassword = '';

    if (user) {
      validPassword = await Bcrypt.compare(password, user.password);
    }

    if (cp_user) {
      validPassword = await Bcrypt.compare(password, cp_user.password);
    }

    if (!validPassword) {
      return res.send('비밀번호가 틀렸습니다..');
    }

    let token = '';

    if (user) {
      token = jwt.sign({ userid: user.userid }, process.env.SECRET_KEY);
    }

    if (cp_user) {
      token = jwt.sign({ userid: cp_user.userid }, process.env.SECRET_KEY2);
    }

    res.send({
      token: token,
      success: true,
      iscompany: iscompany,

      msg: '로그인에 성공 하였습니다.',
    });
  } catch (error) {
    return res.status(400).send(
      console.error(error)
      // errorMessage: '요청한 데이터 형식이 올바르지 않습니다.',
    );
  }
}
// async function getuser(req, res)
module.exports = {
  signup,
  login,
  companysignup,
};
