const http = require('http');

const requestListener = (req, res) => {
    console.dir(res, {depth:0});
    res.write(" Thank you for contacting our server :) ");
    res.end()
}

const server = http.createServer();
server.on('request', requestListener);

server.listen(3300, () => {
    console.log("Server running on port 3300");
});

/* The req object is of type ServerResponse.
*/