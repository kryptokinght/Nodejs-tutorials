const os = require('os');

console.log("OS CPU architecture: ", os.arch());
console.log("OS Platform: ", os.platform());
console.log("# of logical CPU cores: ", os.cpus().length);
console.log("Home Directory of current user: ", os.homedir());
console.log("line 1" + os.EOL + "line 2" + os.EOL + "line 3");