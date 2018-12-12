const fs = require('fs');

const readFileArray = (filename, cb) => { //here callback is passed to a sync function
    fs.readFile(filename, (err, data) => { //here callback is passed to an async function
        if(err)
            cb(err);
        
        const fileArray = data.toString().trim().split('\n');
        cb(null, fileArray);
    });
};

readFileArray('data.txt', (err, arr) => {
    if(err) throw err;
    console.log(arr); //displaying the file as array
});
console.log("This will be logged first because the readFile() is asynchronous");

/*
format of data.txt
111
123
123
134
*/