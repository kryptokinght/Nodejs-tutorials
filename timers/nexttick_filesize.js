const fs = require('fs');

function fileSize(filename, cb) {
    if(typeof filename !== 'string') {
        return process.nextTick(cb, new TypeError('filename must be of type string'));
    }

    fs.stat(filename, (err, stats) => {
        if(err)
            return process.nextTick(cb, err);
        cb(null, stats.size);
    });
}

fileSize(__filename, (err, size) => {
    if(err)
        throw err;
    console.log("Size in KB: ", size/1024);
});

console.log("Hello World");