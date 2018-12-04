var http = require('http');
var fs = require('fs');

const server = http.createServer(function(req, res) {
    var stream = fs.createReadStream(__dirname + '/data.txt');
    /* req.on('/', function() {
        console.log("Requested home page");
    }); */
    stream.pipe(res);
});

server.listen(8000);