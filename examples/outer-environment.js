function b() { //here b()'s outer environment is the global execution context
    console.log('b() :', myvar);
}

function a() {
    var myvar = 'a';
    console.log('a() :', myvar);
    b();
}

var myvar = 'global';
console.log('global :', myvar);
a();