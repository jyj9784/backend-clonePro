// 모듈
const express = require('express');
const router = express.Router();
const CompanyUser = require('../schemas/companyuser');
const authMiddlewareCo = require('../middlewares/auth-middleware-co');

// 회사정보 전체조회(로그인 안되도 다 볼 수 있게?)
router.get('/company', async (req, res) => {
    try {
        const companyInfo = await CompanyUser.find({}, { companyname: 1, profileimage: 1, intro: 1, image: 1, address: 1 });
        res.send(companyInfo);
    } catch (err) {
        res.status(400).send("error")
    }

});

module.exports = router;