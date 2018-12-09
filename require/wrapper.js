// function (exports, require, module, __filename, __dirname) {

let g = 1; //not a global variable, but local to the wrapping function

/* console.log(arguments); */ //prints the arguments of the wrapper function

exports.a = 10; //exports is just an alias for module.exports
// the above code is same as module.exports.a = 10;
module.exports.b = 20;

// return module.exports;

// }




/* Browsers do not have this global wrapping function like Node. 
So we don't need IIFE in Node. */