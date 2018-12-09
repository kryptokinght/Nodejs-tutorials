# Notes on Node
Node runs on a virtual machine provided, at the present, by V8 but in the future Node will be able to run both on V8 and ChakraCore.<br/>
Node uses the V8 engine by default to execute Javascript code.
`node -p 'process.versions.v8'`<br/>
Node uses V8 via V8's C++ API.
V8's feature group can be divided into 3 types :
* Shipping - can be used directly
* Staged - use with the `--harmony` flag
* in progress - Lookup the flags using `node --v8-options | grep 'in progress'`

`node --v8-options` : to see all the v8 options<br/>
Node has an API which we can use via Javascript to interact with the OS, network, timers, filesystem and others.<br/>
Node itself has some [dependencies](https://nodejs.org/en/docs/meta/topics/dependencies/) : 
* V8
* [libuv](https://github.com/libuv/libuv) (event loop)
* [http-parser](https://github.com/nodejs/http-parser) - small C library for parsing HTTP messages
* [c-ares](https://github.com/c-ares/c-ares) - asynchronous DNS queries
* OpenSSL - used in the `tls` and `crypto` modules
* zlib - compression and decompression

### Node REPL(read-eval-print-loop)
The Node REPL commands are:
* `.help` 
* `.break` 
* `.save` 
* `.exit` 
* `.load` 
* `.editor` 
* `.clear` 



### Evironment variable in node
* **NODE_DEBUG** : using core modules to print debug information 
* **NODE_PATH** : To overwrite the default path that Node uses to search for modules 


### Modern Javascript

* `let`  : a variable declared useing let is local to the scope in which the variable was declared and cannot be accessed outside of the scope.
    Eg: 
    ```javascript
    for(let i = 0; i < 10; i++) {
        let a = 10;
    }
    //both i and a cannot be accessed here
    
    for(let i = 0; i < 10; i++) {
        var a = 10;
    }
    //Only a can be accessed here
    
    ```
* `const` : Makes the reference of that variable constant, not the value associated with it. Also they behave implicitly like `let`. Eg:
    ```javascript
        const a = 10;
        a = 20; // illegal
        const arr = [10, 20];
        arr.push(30); //legal
        arr = []; //illegal
    ```
  In order to implement immutability for objects, *Javascript* offers `Object.freeze()` It only freezes the first level of object. Another way to work with immutable objects is the [immutable.js](https://facebook.github.io/immutable-js/) library.
* `function() {}` **VS** `() => {}` : The `this` keyword in case of function() is binded to the caller object, while for arrow function the this keyword is same as the this keyword in function scope when that function was defined. Eg:
    ```javascript
        const obj = {
            func1: function() {console.log(this);},
            func2 : () => {console.log(this);}
        };
        obj.func1(); //outputs obj
        obj.func2(); //either the global object or the windows object in case of browser
    ```

## Steps to publish your npm package

1. Create your package with an index.js file and `npm init` the package.
2. `npm login`
3. `npm publish`
   
   **NOTE** : Make sure you have an account at https://npmjs.com

## Installing and Updating npm packages
    
When an npm package is installed locally, it is installed by default with the ^(carrot) sign in the **package.json** file. This means running `npm update <package_name>` will update the package to its latest *minor version*(1.x.0).

* `npm show learnyounode versions` : To see all the versions of the particular package
* `npm outdated` : To see all the outdated packages and to what version they can be updated. Run this to see which packages are going to be updated to what version before running `npm update` .
* `npm ls` : Gives the **whole dependency** tree of your project 
* To install a package of a particular version like `lodash` of version `4.16.0`, use `npm i lodash@4.16.0`

## Module

* Module is a file that contains code. It is wrapped around with a function as depicted in this example [wrapper.js](Module/wrapper.js) file. 
* Node provides 5 different arguments to the wrapping function `function (exports, require, module, __filename, __dirname)`  
* The wrapping function returns `module.exports`.  
* Its always suggested to change `module.exports` rather than its alias `exports`. Any change made to the reference of alias doesn't affect `module.exports`. For example if we change `exports` by assigining a new object to it `exports = {a: 1}` then `module.exports` remains unaffected.
* **Global Object in Node** : This example file [global.js](Module/global.js) shows the global object by printing it to the console. The functions setTimeout, setImmediate ... are properties of `global` object. This means that using setTimeout is same as using `global.setTimeout` . 

## Debugging Node applications
* Run your program using the following command : `node --inspect-brk filename.js`
* Open **chrome browser** and type: `chrome://inspect`
* Underneath the REMOTE TARGET header is displayed a list of files opened in debug mode. Click on **inspect** to open the **Chrome Debugger** window and start debugging. 

