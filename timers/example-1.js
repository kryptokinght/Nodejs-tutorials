/*
Print Hello World every second for 5 times.
After that print 'Done' and exit
Don't use setTimeout
*/
let counter = 0;
let intervalId = setInterval(() => {
    console.log(`Hello World ${counter}`);
    counter++;

    if(counter === 5) {
        console.log('Done');
        clearInterval(intervalId);
    }
}, 1000, 0);
