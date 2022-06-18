const express = require('express');
const connect = require('./schemas/');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const port = 3000;
const router = express.Router();
const usersRouter = require('./routes/users');
const commentsRouter = require('./routes/comments');
const postsRouter = require('./routes/posts');
const companyRouter = require('./routes/company');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output');
const passport = require('passport');
const passportConfig = require('./passport')
const pageRouter = require('./routes/page');
const authRouter = require('./routes/auth')


connect();

app.use(morgan('dev'));
app.use(cors());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.static('static'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  resave:false,
  saveUninitialized:false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
}))
app.use('/api', [usersRouter, commentsRouter, postsRouter, companyRouter, pageRouter, authRouter]);
passportConfig();
app.get('/', (req, res) => {
  res.send('헬로 월드');
});

app.listen(port, () => {
  console.log(port, '포트가 켜졌습니다.');
});
