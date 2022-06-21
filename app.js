const dotenv = require('dotenv'); // 설정파일
dotenv.config();
const express = require('express');
const app = express();
const connect = require('./schemas/db');
const nodemailer = require('nodemailer');
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session');
const port = 3001;
const router = express.Router();
const postsRouter = require('./routes/posts');
const usersRouter = require('./routes/users');
const companyRouter = require('./routes/company');
const passport = require('passport');
const { Server } = require('socket.io');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output');
const http = require('http');
const server = http.createServer(app);
const Msg = require('./schemas/messages');
const mainRouter = require('./routes/main');
const G_authRouter = require('./routes/google_auth');
const cookieParser = require('cookie-parser');

connect();

const moment = require('moment');
require('moment-timezone');
moment.tz.setDefault('Asia/seoul');
const createdAt = moment().format('HH:mm');
console.log('현재 시각은 ' + createdAt + ' 입니다.');

app.use(morgan('dev'));
app.use(cors());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.static('static'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.use(
  session({ secret: 'MySecret', resave: false, saveUninitialized: true })
);

// Passport setting
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', require('./routes/main'));
app.use('/auth', require('./routes/google_auth'));
app.use('/api', [usersRouter, postsRouter, companyRouter]);
app.use('/auth', [mainRouter, G_authRouter]);
app.get('/', (req, res) => {
  res.send('헬로 월드');
});


// app.get('/chat', (req, res) => {
//   res.sendFile(__dirname + '/chat.html');
// });

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));




const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
const chatspace = io.of('/chat');
chatspace.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    const message = new Msg(data);
    message.save().then(() => {
    socket.to(data.room).emit("receive_message", data);
    
    console.log(data)
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});
});


server.listen(port, () => {
  console.log(port, '포트가 켜졌습니다.');
});