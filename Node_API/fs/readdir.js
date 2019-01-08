/* Read the content of a directory*/

const { readdirSync } = require('fs');

console.log(readdirSync("/"));