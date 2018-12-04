setTimeout(() => process.exit(), 3000); //exit process after 3 seconds

process.on('exit', () => {
    console.log("Process is going to exit. This listener is called before process exits");
});

console.log("Due to asynchronous nature of code this will execute first!");