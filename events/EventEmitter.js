const eventEmitter = require('events');

const myEmitter = new eventEmitter();


myEmitter.on('TEST_EVENT', func1);
myEmitter.on('TEST_EVENT', func1);
myEmitter.on('TEST_EVENT', func2);
myEmitter.emit('TEST_EVENT');

function func1() {
    console.log("func1 fired for TEST_EVENT");
}

function func2() {
    console.log("func2 fired for TEST_EVENT");
}

