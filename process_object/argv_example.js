// how the process.argv array works
// a one line program is : node -p "process.argv" hello 42
// OUTPUT : [ '/usr/local/bin/node', 'hello', '42' ]

console.log("The process.argv array contains: ");
console.log(process.argv);


/*
Run as : node argv_example.js hello minmin
OUTPUT:
[ '/usr/local/bin/node',
  '/home/kryptoknight/Music/open_source/nodejs-tut/process_object/argv_example.js',
  'hello',
  'minmin' ]
*/