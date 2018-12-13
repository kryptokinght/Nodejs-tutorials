const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    fs.createReadStream('file.txt').pipe(res);
});

server.listen(3000);