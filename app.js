const express = require('express');
const app = express();
const port = 8080;

const connect = require('./schemas/index')

connect()

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
