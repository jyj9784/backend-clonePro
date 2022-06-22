const Post = require('../schemas/post');
const Mypage = require('../schemas/mypage');
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth-middleware');

router.put('/mark/:postingid', authMiddleware, async (req, res) => {
  try {
    const { postingid } = req.params;

    const { user } = res.locals;
    const userid = user[0].userid;
    console.log('userid: ', userid);

    const [markList] = await Post.find(
      { postingid },
      {
        postingid: 1,
        userid: 1,
        profileimage: 1,
        companyname: 1,
        maincontent: 1,
        title: 1,
        thumbnail: 1,
        subcontent: 1,
        position: 1,
        intro: 1,
        address: 1,
        _id: 0,
      }
    );
    let m = 0;
    const existsmarks = await Mypage.find();

    for (let i = 0; i < existsmarks.length; i++) {
      if (existsmarks[i].markList[0].postingid === Number(postingid)) {
        await Mypage.deleteOne({ postingid: Number(postingid) });
        res.send('삭제시킴.');
      }
    }
  } catch (err) {
    res.status(400).send('마크 오류');
  }
});

router.get('/mypage', authMiddleware, async (req, res) => {
  try {
    const { user } = res.locals;
    // console.log(user)
    const userId = user[0].userid;
    console.log('userId: ', userId);

    const marks = await Mypage.find({ userId }).sort({ postingid: -1 });
    res.json(marks);
  } catch (err) {
    console.log(err);
    res.status(400).send({
      errorMessage: '마이페이지 조회 오류',
    });
  }
});

module.exports = router;
