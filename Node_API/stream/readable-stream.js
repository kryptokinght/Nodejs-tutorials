// Print one character to stdout every 100ms
const { Readable } = require('stream');
const inputStream = new Readable({
    read(size) {
        setTimeout(() => {
            if(this.currentCharCode > 90) {
                this.push(null);
                return;
            }
            this.push(String.fromCharCode(this.currentCharCode++));
        }, 100)
    }
});

inputStream.currentCharCode = 65;
inputStream.pipe(process.stdout);