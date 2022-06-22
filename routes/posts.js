// 모듈 및 설정파일
const express = require('express');
const router = express.Router();
const postController = require("../controller/posts");
const authMiddlewareCo = require('../middlewares/auth-middleware-co');

// 채용정보 등록(기업회원 로그인 시 가능)
<<<<<<< HEAD
router.post('/postings', authMiddlewareCo, async (req, res) => {
  try {
    // 로그인했을 때 userid
    const { user } = res.locals;
    // console.log(user)
    const userid = user[0].userid;
    const companyname = user[0].companyname;
    const profileimage = user[0].profileimage;
    const intro = user[0].intro;
    const address = user[0].address;
    const country = user[0].country;
    const region = user[0].region;
    console.log(country);
    // console.log(userid)
    // postingid 자동으로 생성되게 설정
    const maxpostingid = await Post.findOne().sort('-postingid');
    let postingid = 1;
    if (maxpostingid) {
      postingid = maxpostingid.postingid + 1;
    }
    // 로그인했을 때 userid와 일치하는 회사정보를 찾아 companyinfo 변수에 담음
    // const companyinfo = await CompanyUser.findOne({ userid }, { companyname: 1, profileimage: 1, intro: 1, image: 1, address: 1 });
    // console.log(companyinfo)
    const { thumbnail, title, maincontent, subcontent, position } = req.body;

    const recruit = await Post.create({
      postingid,
      userid,
      companyname,
      profileimage,
      intro,
      address,
      country,
      region,
      thumbnail,
      title,
      maincontent,
      subcontent,
      position,
    });
    // console.log(recruit)
    res.status(200).send({
      success: true,
      msg: '등록이 완료되었습니다.',
    });
  } catch (err) {
    res.status(400).send('채용정보 작성 오류');
  }
});
=======
router.post('/postings', authMiddlewareCo, postController.recruitpost) 
>>>>>>> 2e49375a0080c43104f8923555db68ab85101359

// 채용정보 수정(기업회원 로그인 시 가능)
router.put('/postings/:postingid', authMiddlewareCo, postController.recruitfixment)
 
// 채용정보 상태 수정(기업회원 로그인 시 가능)
router.patch('/postings/:postingid', authMiddlewareCo, postController.recruitstatusfixment) 
  
// 채용정보 삭제(기업회원 로그인 시 가능)
router.delete('/postings/:postingid', authMiddlewareCo, postController.recruitdelete) 

// 채용정보 전체조회
router.get('/postings', postController.recruitget) 

<<<<<<< HEAD
// 채용정보 전체조회(로그인 안되도 다 볼 수 있게)
router.get('/postings', async (req, res) => {
  try {
    const posts = await Post.find({}).sort({ postingid: -1 });
    console.log(posts);
    const companyinfo = await CompanyUser.find(
      {},
      {
        companyname: 1,
        profileimage: 1,
        intro: 1,
        image: 1,
        address: 1,
        industry: 1,
      }
    );
    console.log(companyinfo);
    const info = {};
    info.posts = posts;
    info.companyinfo = companyinfo;
    res.send(info);
  } catch (err) {
    res.status(400).send('채용정보 조회 오류');
  }
});
=======
>>>>>>> 2e49375a0080c43104f8923555db68ab85101359

module.exports = router;
