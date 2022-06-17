// 모듈
const express = require('express');
const router = express.Router();
const Post = require('../schemas/post');
const CompanyUser = require('../schemas/companyuser');
const authMiddleware = require('../middlewares/auth-middleware');

// 채용정보 등록(기업회원 로그인 시 가능)
router.post('/posting', async (req, res) => {
    try {

        const maxpostingid = await Post.findOne().sort('-postingid').exec();
        let postingid = 1
        if (maxpostingid) {
            postingid = maxpostingid.postingid+1;
        }
        // const {userid} = res.locals.user;
        const { thumbnail, title, maincontent, subcontent, userimage, position } = req.body;

        const recruit = await Post.create({
            postingid,
            // userid,
            thumbnail,
            companyname,
            title,
            maincontent,
            subcontent,
            userimage,
            position,
        });

        res.send(recruit)
        } catch(err) {
            res.status(400).send({
                msg: "채용정보 작성 오류"
            })
    }
});

// 채용정보 수정(기업회원 로그인 시 가능)
router.put('/posting/:postingid', async (req, res) => {
    try {
        const { postingid } = req.params;
        const { thumbnail, title, maincontent, subcontent, userimage, position } = req.body;
        const { user } = res.locals;
        const list = await Post.findOne({ postingid });
        if (user.name === list.companyname) {
            await Post.updateOne({$set: req.body});
            res.status(200).send()
        } else {
            res.status(403).jsond()
        }
    } catch {

    }

});

// 채용정보 삭제(기업회원 로그인 시 가능)
router.delete('/posting/:postingid', async (req, res) => {
    try {

    } catch {

    }
});

// 채용정보 전체조회
router.get('/posting', async (req, res) => {
    try {
        const posts = await Post.find({}).sort({ postingid: -1});
        res.json({
            posts,
        });
    } catch(err) {
        res.status(400).send({
            errorMessage: "오류 발생"
        })
    }
});

module.exports = router;