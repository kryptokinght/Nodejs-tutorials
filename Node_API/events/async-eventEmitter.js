const eventEmitter = require('events');

const myEmitter = new eventEmitter();

myEmitter.on('TEST_EVENT', () => console.log("fired for TEST_EVENT"));

setImmediate(() => { //makes the function inside it(arrow function) to enter the event loop.
    myEmitter.emit('TEST_EVENT');
});
/* Content inside an event loop is executed when the execution of the whole 
program has completed*/
console.log("Random code 1");
console.log("Random code 2");
console.log("Random code 3");

myEmitter.on('TEST_EVENT', () => console.log("fired for TEST_EVENT"));
myEmitter.on('TEST_EVENT', () => console.log("fired for TEST_EVENT"));
myEmitter.on('TEST_EVENT', () => console.log("fired for TEST_EVENT"));
