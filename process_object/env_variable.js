// Sample program to show the use of environment variables

console.log("Current User is : ", process.env.USER);

console.log("The value of environment variables VAR1 and VAR2 are: ");
console.log(`VAR1 : ${process.env.VAR1}`);
console.log(`VAR2 : ${process.env.VAR2}`);

/* RUN this program using the command: 'VAR1=10 VAR=100 node env_variable.js' */