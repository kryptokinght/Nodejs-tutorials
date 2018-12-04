// print 'hello every 3 sec' for 16 sec and then clear timer

const func = () => {
    console.log(`Helo every 3 seconds`);
}

const timer = setInterval(func, 3000);

setTimeout(() => {
    clearInterval(timer);
}, 16000);