const fs = require('fs').promises;

async function main() {
    const data = await fs.readFile('data.txt', 'utf-8');
    console.log(data);
}

main();
console.log("TEST");