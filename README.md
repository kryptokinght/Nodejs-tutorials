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