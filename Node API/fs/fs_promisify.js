const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

async function main() {
    const data = await readFile('data.txt', 'utf-8');
    console.log(data);
}

main();
console.log('TEST');