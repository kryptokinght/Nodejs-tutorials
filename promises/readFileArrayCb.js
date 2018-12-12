const fs = require('fs');

const readFileArray = (filename, cb = () => {}) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, data) => {
            if(err) {
                reject(err);
                cb(err);
            }
                
            const fileArray = data.toString().trim().split('\n');
            resolve(fileArray);
            cb(null, fileArray);
        });
    });

};

//example calls

// 1.promise way
readFileArray('fileArray.txt')
    .then((arr) => {
        console.log('promise', arr);
    })
    .catch(console.error);

// 2.callback way
readFileArray('fileArray.txt', (err, arr) => {
    if(err) throw err;
    console.log('cb', arr); //displaying the file as array
});

// 3. Async way of dealing with the function and counting odd values inside it.
async function countOdd() {
    let oddArr = 0;
    const arr = await readFileArray('fileArray.txt');
    const arrNum = arr.map(Number);
    oddArr = arrNum.filter(number => number%2 !== 0);
    console.log('Count: ', oddArr.length); 
}
countOdd(); //will execute last after 1 and 2

console.log("This will be logged first!");

/*
format of data.txt
111
123
123
134
*/