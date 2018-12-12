const { Buffer } = require('buffer');

const str = 'Lorem Ipsum';
const buf = Buffer.from(str);

console.log(`String: ${str} length: ${str.length}`);
console.log(`Buffer: ${buf} length: ${buf.length}`);
console.log(buf, buf.length);