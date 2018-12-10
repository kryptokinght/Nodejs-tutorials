const path = require('path');
const fs = require('fs');

const files = ['.npmrc', '.bash_history', 'asdasd'];
files.forEach(file => {
    try {
        const filepath = path.resolve(process.env.HOME, file);
        const content = fs.readFileSync(filepath, 'utf-8');
        console.log("File data :", content);
    }
    catch(err) {
        if(err.code === 'ENOENT')
            console.log("File not found");
        else    
            throw err;
    }
});