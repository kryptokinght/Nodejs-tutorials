const http = require('http');

const PORT = 3300;

const server = http.createServer((req, res) => {
    res.end(`A sample respone from Nodejs server running on port ${PORT}`);
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});