/*
Print "Hello after 4 sec" after 4 sec
Print "Hello after 8 sec" after 8 sec
Use only a single function
*/

const func = (time) => {
    console.log(`Hello after ${time} sec`);
}

setTimeout(func, 1000*4, 4);
setTimeout(func, 1000*8, 8);