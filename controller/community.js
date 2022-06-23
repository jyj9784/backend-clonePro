const Message = require('../schemas/messages');

async function communitypage(req, res) {
  try {
    const { user } = res.locals;
    const username = user[0].username;
    const profileimage = user[0].profileimage;
    res.json({ username, profileimage });
  } catch (err) {
    res.status(400).send('정보 전달 오류');
  }
}

async function getchat(req, res) {
  await Message.find().exec((err, result) => {
    if (err) return res.send(null);
    res.send(result);
  });
}

module.exports = {
  communitypage,
  getchat,
};
