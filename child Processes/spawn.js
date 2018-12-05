// Runs OS commands directly inside your node process

const { spawn } = require('child_process');
const path = require('path');
//print working directory
const pwd = spawn('pwd');
pwd.stdout.pipe(process.stdout);

//Read content of a file
const { HOME } = process.env;
console.log
const cat = spawn('cat', [path.resolve(HOME, '.bash_logout')]);
cat.stdout.pipe(process.stdout);

//list all files in current directory
const ls = spawn('ls', ['-l']);
ls.stdout.pipe(process.stdout);

//use shell syntax (no passing of arguments as array) 
//dangerous when the executing string is not known
const ls1 = spawn('ls -la ~ | wc -l', {shell:true});
ls1.stdout.pipe(process.stdout);