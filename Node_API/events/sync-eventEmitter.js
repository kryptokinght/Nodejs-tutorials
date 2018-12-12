const eventEmitter = require('events');

const myEmitter = new eventEmitter();


myEmitter.on('TEST_EVENT', func1);

myEmitter.emit('TEST_EVENT');

myEmitter.on('TEST_EVENT', func1); //not printed
myEmitter.on('TEST_EVENT', func2); //not printed
/* The above two callbacks for TEST_EVENT are not executed because myEmitter.emit() 
is executed synchronously. And at that particular time only one callback is 
attached to the event. To print all the callbacks myEmitter.emit() is executed
asynchrnously as shown in async-eventEmitter.js */

function func1() {
    console.log("func1 fired for TEST_EVENT");
}

function func2() {
    console.log("func2 fired for TEST_EVENT");
}

