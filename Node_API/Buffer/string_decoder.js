const { StringDecoder }  = require('string_decoder');
const decoder = new StringDecoder('utf8');

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if(chunk != null) {
        const buff = Buffer.from([chunk]);
        console.log('With toString(): ', buff.toString());
        console.log('With StringDecoder: ', decoder.write(buff));
    }
});