const { httpServer } = require('./socket');

httpServer.listen(3000, () => {
    console.log('Server start at http://localhost:3000');
});