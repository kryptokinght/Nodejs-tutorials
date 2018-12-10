const http = require('http');

const requestListener = (req, res) => {
    console.dir(req, {depth:0});
    res.write(" Thank you for contacting our server :) ");
    res.end()
}

const server = http.createServer();
server.on('request', requestListener);

server.listen(3300, () => {
    console.log("Server running on port 3300");
});

/* The req object is of type IncomingMessage. 
When we request from the browser, we see that two IncomingMessage objects are
printed in the console. This is because in the first IncomingMessage object
the value of url is {url: '/'} and in the second object the value is
{url: '/favicon.ico'}. 
*/