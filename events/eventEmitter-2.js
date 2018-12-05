const eventEmitter = require('events');

const myEmitter = new eventEmitter();

setImmediate(() => { //makes the function inside it(arrow function) to enter the event loop.
    myEmitter.emit('TEST_EVENT');
});
/* Content inside an event loop is executed when the execution of the whole 
program has completed*/

myEmitter.on('TEST_EVENT', () => console.log("fired for TEST_EVENT"));
myEmitter.on('TEST_EVENT', () => console.log("fired for TEST_EVENT"));
myEmitter.on('TEST_EVENT', () => console.log("fired for TEST_EVENT"));