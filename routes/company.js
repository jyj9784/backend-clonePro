// 모듈
const express = require('express');
const router = express.Router();
const CompanyUser = require('../schemas/companyuser');
const authMiddleware = require('../middlewares/auth-middleware');

// 회사정보 전체조회(로그인 시 가능)
router.get('/', async (req, res) => {
    try {
        const companyInfo = await Companyuser.find({}, { companyname: 1, profileimage: 1, intro: 1, image: 1, address: 1 })
        res.json({ comanyInfo });
    } catch (err) {
        res.status(400).send("error")
    }

});

module.exports = router;