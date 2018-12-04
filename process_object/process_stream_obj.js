console.log("Hello World");
/* The above can be written as : */
process.stdout.write("Hello World");

console.log("\n*****READ******");

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if(chunk != null)
        process.stdout.write(chunk);
});