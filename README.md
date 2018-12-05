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
  In order to implement immutability for objects, *Javascript* offers `Object.freeze()` It only freezes the first level of object. Another way to work with immutable objects is the ***immutable.js*** library.
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
   
   **NOTE** : Make sure you have an account on https://npmjs.com

## Installing and Updating npm packages
    
When an npm package is installed locally, it is installed with the ^(carrot) sign in the **package.json** file. This means that when we run `npm update` the package will update to the latest *minor version*.

* `npm show learnyounode versions` : To see all the versions of the particular package
* `npm outdated` : To see all the outdated packages and to what version they can be updated. Run this to see which packages are going to be updated to what version before running `npm update` .
* `npm ls` : Gives the **whole dependency** tree of your project 
* To install a package of a particular version like `lodash` of version `4.16.0`, use `npm i lodash@4.16.0`

## Module

* Module is a file that contains code. It is wrapped around with a function as depicted in this [wrapper.js](Module/wrapper.js). 
* Thus we see that Node provides 5 different arguments to the wrapping function. 
* The wrapping function also **returns** something. It returns `return module.exports` . 
* Its always suggested to change `module.exports` rather than the alias `exports`. Because if we assign a new object to alias or assign a function to alias then
the reference to which the alias points changes while the value of `module.exports` remains unaffected. And so module.exports doesn't pass anything.
* **Global Object in Node** : This file [global.js](Module/global.js) shows the global object by printing it. We see that setTimeout, setImmediate ... are properties of `global` object. This means setTimeout is same as `global.setTimeout` . 

