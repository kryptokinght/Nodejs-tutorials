console.log('In ./lib/find-me.js --------------------');
setTimeout(() => {
    exports.id = 'find-me';
    console.log("exports object in find-me.js has been set");
}, 3000);
