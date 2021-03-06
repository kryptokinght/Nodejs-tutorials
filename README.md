# Notes on Node

[Ryan Dahl - First Node.js presentation at JSConf 2009][12] - *This is the first ever introdution of Node.js and will help you understand the reason behind the beginning of node.*

Node runs on a virtual machine provided, at the present, by V8 but in the future Node will be able to run both on V8 and ChakraCore.<br/>
Node uses the V8 engine by default to execute Javascript code. The V8 is just the *call stack* and the *heap memory* while the rest of the features like *event queue, event loop, Node API* are not present in the V8 but provided by other dependencies of Node.<br/>
For example, **event loop** is provided by the `libuv` dependency. 
`node -p 'process.versions.v8'` to see the version of the V8 dependency your Node is using.<br/>
Node uses V8 via V8's C++ API.
V8's feature group can be divided into 3 types :

- Shipping - can be used directly
- Staged - use with the `--harmony` flag
- in progress - Lookup the flags using `node --v8-options | grep 'in progress'`

`node --v8-options` : to see all the v8 options<br/>
Node provides an API which can be used via Javascript to interact with the OS, network, timers, filesystem and others.<br/>
This API is provided by Node with the help of some [dependencies][3] like:

- V8
- [libuv][4] - event loop
- [http-parser][5] - small C library for parsing HTTP messages
- [c-ares][6] - asynchronous DNS queries
- OpenSSL - used in the `tls` and `crypto` modules
- zlib - compression and decompression

Javascript execution takes place in 2 phases:

1. **Creation phase** - This is the first phase of creating the **Javascript execution context**. The parser goes through the code and sets up memory for functions and variables. The functions are initialized with their definition but the variables are initialized with `undefined`. Due to this functions can be defined anywhere in the program. This is called **`hoisting`**. Though it is recommended to define functions at the top of the program. An [example](hoisting/example.js) of `hoisting`. Also the **global object**, `this` and Outer Environment is created during this phase.
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

### Evironment variable in node

- **NODE_DEBUG** : using core modules to print debug information
- **NODE_PATH** : To overwrite the default path that Node uses to search for modules

### How does require() really works?
What happens when you perform `const abc = require('abc');`.
First of all, loading a module doesn't only mean loading, it means loading, compiling and caching.
<br/>
Modules in Nodejs, or any file that ends with a .js extension, is handled by a very powerful core moduel of node called **`module.js`** which handles the loading, caching and compiling of the node modules.
<br/>
`module.js` has two main roles:
1. Instantiate all files with this base module - `module.js`. This is why we can attach properties to `module.exports` and return them.
2. Handle the loading mechanism of modules.
   
  `require()` is an 

<br/>
To know more about require() in details, check out this blog: <br/>
http://fredkschott.com/post/2014/06/require-and-the-module-system/

## Node REPL(read-eval-print-loop)

The Node REPL commands are:

- `.help`
- `.break`
- `.save`
- `.exit`
- `.load`
- `.editor`
- `.clear` (alias for `.break`)

## Node API

* ### Module

  In NodeJS, all files are treated as a **module**. It is wrapped around with a function as depicted in this example [wrapper.js](Node_API/require/wrapper.js) file.<br/>
  Node provides 5 different arguments to the wrapping function `(function (exports, require, module, __filename, __dirname) {\n});`<br/>  
  The wrapping function returns `module.exports`. Its always suggested to change `module.exports` rather than its alias `exports`. Any change made to the reference of alias doesn't affect `module.exports`. <br/>
  For example if we change `exports` by assigining a new object to it `exports = {a: 1}` then `module.exports` remains unaffected. <br/>

* ### Buffer

  Buffer is a low level data structure that stores sequence of binary data. Buffers are useful when we have to read an image, audio, video, compressed, or any other file from a stream. The bytes from these kind of files are stored inside the Buffer data structure.<br/>
  There are [3 ways][1] of allocating Buffer:

  1. `Buffer.alloc(<size_in_integer>)` - Allocates buffer of fixed size and also fills/initializes it.
  2. `Buffer.allocUnsafe(<size_in_integer>)` - Allocates buffer of fixed size but doesn't fill it. However it can be filled using `Buffer.allocUnsafe(100).fill()`
  3. `Buffer.from(<object>)` - creates a new `Buffer` from `Array`, `ArrayBuffer`, `String`, `Buffer`.

  When Decoding Buffer strings it is recommended to use the `StringDecoder module`. It handles incomplete multibyte characters better than other modules. An [example](Buffer/string_decoder.js) to show its use.

* ### Streams
    This [article][11] gives a good explanation of the streams object in the NodeJs API. 

* ### Global Object in Node 
  This example file [global.js](Node_API/Module/global.js) shows the global object by printing it to the console. The functions setTimeout, setImmediate ... are properties of `global` object. This means that using setTimeout is same as using `global.setTimeout` . <br/>

  `require()` is a function that takes the module name or path and returns the exports object.



## Debugging Node applications

- Run your program using the following command : `node --inspect-brk filename.js`
- Open **chrome browser** and type: `chrome://inspect`
- Underneath the REMOTE TARGET header is displayed a list of files opened in debug mode. Click on **inspect** to open the **Chrome Debugger** window and start debugging.

## Modern Javascript

### Callbacks doesn't mean asynchronous nature
If a callback is passed to an synchronous function then only the callback is said to be async. Otherwise callbacks passed to normal functions as arguments are synchronous. Here is an [example](/Node_API/fs/sync_callback.js) of a **synchronous callback**. The same example can be done asynchronously using *promises* [here](promises/readFileArray.js). Most Javascript packages nowadays take the approach of introducing both callback and promises to their modules. [Here](promises/readFileArrayCb.js) is the previous example using this method.

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
[11]: https://medium.freecodecamp.org/node-js-streams-everything-you-need-to-know-c9141306be93
[12]: https://www.youtube.com/watch?v=ztspvPYybIY

