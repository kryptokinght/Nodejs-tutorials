//using fs.createWriteStream() to create a consummable stream on a file.
//This is an example of consuming a stream
const fs = require('fs');
const a = 10;

const file = fs.createWriteStream('file.txt');
for(let i = 0; i < 100; i++) {
    file.write(`This is a sample line of text ${a}\n `);
}
file.end('One last line to write before ending!');

file.on('finish', () => {
    console.log('Stream is about to end');
});

file.on('close', () => {
    console.log("The stream is about to be closed!");
});
