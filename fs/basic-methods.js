const fs = require('fs');

fs.stat('data.txt', (err, stat) => {
    console.log(stat);
});
