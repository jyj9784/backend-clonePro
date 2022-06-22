const Post = require('../schemas/post');
const CompanyUser = require('../schemas/companyuser');

async function companiesmypage(req, res) {
    try {
        const { user } = res.locals;
        const userid = user[0].userid;
        const existsPost = await Post.find({ userid }).sort({
          status: -1,
          postingid: -1,
        });
        const companyinfo = await CompanyUser.find({ userid }, { password: 0 });
        const info = {};
        info.existsPost = existsPost;
        info.companyinfo = companyinfo;
        res.status(200).send(info);
      } catch (err) {
        res.status(400).send('마이페이지 조회 오류');
      }
};


module.exports = {
    companiesmypage
};