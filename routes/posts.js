// 모듈
const express = require('express');
const router = express.Router();
const Post = require('../schemas/post');
const CompanyUser = require('../schemas/companyuser');
const authMiddlewareCo = require('../middlewares/auth-middleware-co');

// 채용정보 등록(기업회원 로그인 시 가능)
router.post('/posting', authMiddlewareCo, async (req, res) => {
    try {
        // 로그인했을 때 userid
        const {user} = res.locals;
        console.log(user)
        const userid = user[0].userid;
        // postid 자동으로 생성되게 설정
        const maxpostingid = await Post.findOne().sort('-postingid').exec();
        let postingid = 1
        if (maxpostingid) {
            postingid = maxpostingid.postingid+1;
        }
        // 로그인했을 때 userid와 일치하는 회사정보를 찾아 companyinfo 변수에 담음
        const companyinfo = await CompanyUser.findOne({ userid });
        const { thumbnail, title, maincontent, subcontent, userimage, position } = req.body;
        const recruit = await Post.create({
            postingid,
            userid,
            thumbnail,
            title,
            maincontent,
            subcontent,
            userimage,
            position,
        });
            res.status(201).send([recruit, companyinfo]);
    } catch (err) {
        res.status(400).send("error")
    }
});

// 채용정보 수정(기업회원 로그인 시 가능)
router.put('/posting/:postingid', authMiddlewareCo, async (req, res) => {
    try {
        const { postingid } = req.params;
        const { thumbnail, title, maincontent, subcontent, userimage, position } = req.body;
        const { user } = res.locals.user;
        const userid = user[0].userid;
        const list = await Post.findOne({ postingid: Number(postingid) });
        console.log(list)
        if (userid === list.userid) {
            await Post.updateOne({postingid}, {$set: req.body});
            res.status(200).send({ success: true});
        } else {
            res.status(403).send("수정 권한이 없습니다.");
        }
    } catch {
        res.status(400).send("error");
    }

});

// 채용정보 삭제(기업회원 로그인 시 가능)
router.delete('/posting/:postingid', authMiddlewareCo, async (req, res) => {
    try {
        const { postingid } = req.params;
        const { user } = res.locals;
        const userid = user[0].userid;
        const list = await Post.findOne({ postingid: Number(postingid) });
        console.log(list)
        if (userid === list.userid) {
            await Post.deleteOne({ postingid: Number(postingid) });
            res.status(200).send({ success: true});
        } else {
            res.status(403).send("삭제 권한이 없습니다.");
        }
    } catch {
        res.status(400).send("error");
    }
});

// 채용정보 전체조회(로그인 안되도 다 볼 수 있게?)
router.get('/posting', async (req, res) => {
    try {
        const posts = await Post.find({}).sort({ postingid: -1});
        res.send(posts);
    } catch(err) {
        res.status(400).send("error");
    }
});

module.exports = router;