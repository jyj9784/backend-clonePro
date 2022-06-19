const dotenv = require('dotenv'); // 설정파일
dotenv.config();
const express = require('express');
const app = express();
const connect = require('./schemas/');
const passport = require('passport');
const pageRouter = require('./routes/page');
const {sequelize} = require('./models');
const passportConfig = require('./passport'); //Passport 설정 import
const cors = require('cors');
const morgan = require('morgan');
const port = 3000;
const router = express.Router();
const usersRouter = require('./routes/users');
const commentsRouter = require('./routes/comments');
const postsRouter = require('./routes/posts');
const companyRouter = require('./routes/company');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output');
const authRouter = require('./routes/auth')




connect();

app.use(morgan('dev'));
app.use(cors());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.static('static'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



passportConfig(); //호출
app.set('port',process.env.PORT || 8001);
app.set('view engine','html');

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





