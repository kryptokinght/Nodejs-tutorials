/* In this example we will check whether the file is being run as a script
or being required as a module. This file will contain the simple implementation of
a print() function that takes two arguments : length of stars, text to print

print(5, hello)
OUTPUT:
*****
hello
*****
*/ 

const print = (len, txt) => {
    console.log('*'.repeat(len));
    console.log(txt);
    console.log('*'.repeat(len));
};

if(require.main == 'module') {
    /*
    File is being run as a script: node print.js 5 hello
    */
   print(process.argv[2], process.argv[3]);
}
else {
    //file is being required : const print = require('./print.js');
    module.exports = print; 
}