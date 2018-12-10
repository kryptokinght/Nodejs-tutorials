b();
console.log(a, "due to hoisiting value is undefined"); 
/*
The value of `a` is undefined in the above log statement. This can be solved 
by declaring `a` with `let`.
*/

function b() {
    console.log("I am function b");
}

var a = "I am variable a";
console.log(a);