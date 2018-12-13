//this is an echo stream, it logs each string to console that is enetered as input
//THis is an example of implememnting a stream
//Here we are trying to vaguely implement a process.stdout stream

const { Writable } = require("stream");

const outStream = new Writable({
  write(chunk, encoding, callback) {
    let str = chunk.toString();
    if (str[0] === "x" && str.length === 2) {
      process.stdin.emit("end");
      return;
    }
    console.log(str);
    callback();
  }
});

process.stdin.on("end", () => {
  process.stdin.destroy();
  console.log("process.stdin stream is being closed!");
  //process.exit(1);
});

outStream
  .on("finish", () => {
    console.log("Finished writing to output stream");
  })
  .on("pipe", () => {
    console.log("it has been piped!!!");
  })
  .on("error", err => {
    console.error(err);
    process.exit(1);
  });

process.stdin.pipe(outStream);
