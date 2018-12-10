const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send("Hello express");
});

server.listen(3300, () => {
    console.log("Server running on port 3300");
});