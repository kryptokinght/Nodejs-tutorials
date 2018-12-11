# Notes on Node

Node runs on a virtual machine provided, at the present, by V8 but in the future Node will be able to run both on V8 and ChakraCore.<br/>
Node uses the V8 engine by default to execute Javascript code. The V8 is just the *call stack* and the *heap memory* while the rest of the features like *event queue, event loop, Node API* are not present in the V* and provided by the other dependencies of Node.<br/>
The **event loop** is provided by the `libuv` dependency. 
`node -p 'process.versions.v8'`<br/>
Node uses V8 via V8's C++ API.
V8's feature group can be divided into 3 types :

- Shipping - can be used directly
- Staged - use with the `--harmony` flag
- in progress - Lookup the flags using `node --v8-options | grep 'in progress'`

`node --v8-options` : to see all the v8 options<br/>
Node has an API which we can use via Javascript to interact with the OS, network, timers, filesystem and others.<br/>
Node itself has some [dependencies][3] :

- V8
- [libuv][4] - event loop
- [http-parser][5] - small C library for parsing HTTP messages
- [c-ares][6] - asynchronous DNS queries
- OpenSSL - used in the `tls` and `crypto` modules
- zlib - compression and decompression

Javascript execution takes place in 2 phases:

1. **Creation phase** - This is the first phase of creating the **Javascript execution context**. The parser goes through the code and sets up memory for functions and variables. The functions are initialized with their definition but the variables are initialized with `undefined`. Due to this functions can be defined anywhere in the program. This is called **`hoisting`**. Though it is recommended to define functions at the top of the program. An [example](hoisting/example.js) of `hoisting`. Also the **global object**, `this` and Outer Environment is created durin this phase.
2. **Execution phase** - The execution of the Program takes place line by line. 

Whenever a function is executed its **Execution context** is created and stored on the stack. This *execution context* consists of the *creation phase* where the variables and functions are stored in memory, and the *execution phase* where the lines are execute done by one. Once the function finishes exeution, its execution context is popped off from the stack. All programs initially have a **Global Execution Context** which contains the code of the whole program. 

### Outer Environment
A function's **Outer Environment** is determined by its *lexical context* which means where the function is defined. If a fuction is defined in the **Global Execution Context** then its **outer environment** is the global execution context and thus the function can access any functions that are defined within this global execution context. Or if the function s defined(i don't mean called) within another function then the function's outer environment is that function and so it can access variables that are defined in that outer environment or are accessible in that outer environment.
Here is an [example](examples/outer-environment.js) to show the concept of outer environment. <br/>
Every function in JS has a **reference to outer environment**.  <br/>
**Scope chain** - A function resolves a variable by moving down the scope chain unless it finds it. Here scope chain is a series of outer environments one below the other as if like a downwards staircase.   

### Concurrency model and Event loop
Single threaded frameworks like Node uses event loop and callbaacks to perform slow I/O operations.
* [This video][8] here explains perfectly *Concurrency model and Event Loop* in JS running on **Browsers**.
* [Furthur Adventures of the Event Loop - Erin Zimmer - JSConf EU 2018][9] : Explains the event loop in case of **browsers**, **node** and **webworkers**.
* [Jake Archibald - In the loop][10] : A more example oriented way of explaning event loop. 

### Node REPL(read-eval-print-loop)

The Node REPL commands are:

- `.help`
- `.break`
- `.save`
- `.exit`
- `.load`
- `.editor`
- `.clear`

### Evironment variable in node

- **NODE_DEBUG** : using core modules to print debug information
- **NODE_PATH** : To overwrite the default path that Node uses to search for modules

### Modern Javascript

- `let` : a variable declared useing let is local to the scope in which the variable was declared and cannot be accessed outside of the scope.
  Eg:
  ```javascript
  for (let i = 0; i < 10; i++) {
    let a = 10;
  }
  //both i and a cannot be accessed here

  for (let i = 0; i < 10; i++) {
    var a = 10;
  }
  //Only a can be accessed here
  ```
- `const` : Makes the reference of that variable constant, not the value associated with it. Also they behave implicitly like `let`. Eg:
  ```javascript
  const a = 10;
  a = 20; // illegal
  const arr = [10, 20];
  arr.push(30); //legal
  arr = []; //illegal
  ```
  In order to implement immutability for objects, _Javascript_ offers `Object.freeze()` It only freezes the first level of object. Another way to work with immutable objects is the [immutable.js][2] library.
- `function() {}` **VS** `() => {}` : The `this` keyword in case of function() is binded to the caller object, while for arrow function the this keyword is same as the this keyword in function scope when that function was defined. Eg:
  ```javascript
  const obj = {
    func1: function() {
      console.log(this);
    },
    func2: () => {
      console.log(this);
    }
  };
  obj.func1(); //outputs obj
  obj.func2(); //either the global object or the windows object in case of browser
  ```

## Steps to publish your npm package

1. Create your package with an index.js file and `npm init` the package.
2. `npm login`
3. `npm publish`

   **NOTE** : Make sure you have an account at [npmjs][7].

## Installing and Updating npm packages

When an npm package is installed locally, it is installed by default with the ^(carrot) sign in the **package.json** file. This means running `npm update <package_name>` will update the package to its latest _minor version_(1.x.0).

- `npm show learnyounode versions` : To see all the versions of the particular package
- `npm outdated` : To see all the outdated packages and to what version they can be updated. Run this to see which packages are going to be updated to what version before running `npm update` .
- `npm ls` : Gives the **whole dependency** tree of your project
- To install a package of a particular version like `lodash` of version `4.16.0`, use `npm i lodash@4.16.0`

## Module

In NodeJS, all files are treated as a **module**. It is wrapped around with a function as depicted in this example [wrapper.js](Module/wrapper.js) file.<br/>
Node provides 5 different arguments to the wrapping function `function (exports, require, module, __filename, __dirname)`<br/>  
The wrapping function returns `module.exports`. Its always suggested to change `module.exports` rather than its alias `exports`. Any change made to the reference of alias doesn't affect `module.exports`. <br/>
For example if we change `exports` by assigining a new object to it `exports = {a: 1}` then `module.exports` remains unaffected. <br/>

**Global Object in Node** : This example file [global.js](Module/global.js) shows the global object by printing it to the console. The functions setTimeout, setImmediate ... are properties of `global` object. This means that using setTimeout is same as using `global.setTimeout` . <br/>

`require()` is a function that takes the module name or path and returns the exports object.

## Buffer

Buffer is a low level data structure that stores sequence of binary data. Buffers are useful when we have to read an image, audio, video, compressed, or any other file from a stream. The bytes from these kind of files are stored inside the Buffer data structure.<br/>
There are [3 ways][1] of allocating Buffer:

1. `Buffer.alloc(<size_in_integer>)` - Allocates buffer of fixed size and also fills/initializes it.
2. `Buffer.allocUnsafe(<size_in_integer>)` - Allocates buffer of fixed size but doesn't fill it. However it can be filled using `Buffer.allocUnsafe(100).fill()`
3. `Buffer.from(<object>)` - creates a new `Buffer` from `Array`, `ArrayBuffer`, `String`, `Buffer`.

When Decoding Buffer strings it is recommended to use the `StringDecoder module`. It handles incomplete multibyte characters better than other modules. An [example](Buffer/string_decoder.js) to show its use.

## Debugging Node applications

- Run your program using the following command : `node --inspect-brk filename.js`
- Open **chrome browser** and type: `chrome://inspect`
- Underneath the REMOTE TARGET header is displayed a list of files opened in debug mode. Click on **inspect** to open the **Chrome Debugger** window and start debugging.

[1]: https://nodejs.org/api/buffer.html#buffer_buffer_from_buffer_alloc_and_buffer_allocunsafe
[2]: https://facebook.github.io/immutable-js/
[3]: https://nodejs.org/en/docs/meta/topics/dependencies/
[4]: https://github.com/libuv/libuv
[5]: https://github.com/nodejs/http-parser
[6]: https://github.com/c-ares/c-ares
[7]: https://npmjs.com
[8]: https://www.youtube.com/watch?v=8aGhZQkoFbQ
[9]: https://www.youtube.com/watch?v=u1kqx6AenYw
[10]: https://www.youtube.com/watch?v=cCOL7MC4Pl0

