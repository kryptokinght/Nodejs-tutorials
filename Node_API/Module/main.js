const path = require('path');
const fs = require('fs');
const express = require('express');

console.log(fs.realpathSync('/')); //gives the canonical path
console.log(require.resolve.paths('express')); //gives the absolute path of the module
console.log("-".repeat(20));


// printing out all the children ids for this module
console.log(module);
console.log("-".repeat(20));
// console.log(require);

console.log("-".repeat(20));
console.log(require.main === module);

console.log("-".repeat(20));
console.log(__filename);
console.log(__dirname);
console.log(Object.keys(require.cache));