const fs = require('fs');

fs.readFile('data.txt', 'utf-8', (err, data) => {
    if(err)
        console.error("File cannot be read");
    else
        console.log(data);
});

console.log('TEST');