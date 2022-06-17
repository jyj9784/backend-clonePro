const express = require('express');
// const aws = require('aws-sdk');
const connect = require('./schemas/');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const port = 3000;
const router = express.Router();
const usersRouter = require('./routes/users');
const commentsRouter = require('./routes/comments');
const postsRouter = require('./routes/posts');

connect();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.static('static'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', [usersRouter, commentsRouter, postsRouter]);

app.get('/', (req, res) => {
  res.send('헬로 월드');
});

app.listen(port, () => {
  console.log(port, '포트가 켜졌습니다.');
});
