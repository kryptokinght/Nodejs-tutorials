// Catching Exceptions before process exits automatically and manually exiting with an exitCode.

process.on('exit', (exitCode) => {
    console.log(`Process exited with Exit Code ${exitCode}`);
});


process.on('uncaughtException', (err) => {
    console.error(err);
    //manually exiting the process with exitCode 100
    process.exit(100);
});

//to keep the event loop busy, otherwise the process will automatically exit
process.stdin.resume();

//trigger a TypeError exception
console.doggy(); 