const fs = require('fs');

const readFileArray = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, data) => {
            if(err)
                return reject(err);
            
            const fileArray = data.toString().trim().split('\n');
            resolve(fileArray);
        });
    });

};

readFileArray('fileArray.txt')
    .then((arr) => {
        console.log(arr);
    })
    .catch(console.error);

console.log("This will be logged first!");

/*
format of data.txt
111
123
123
134
*/