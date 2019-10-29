// this will work
let reg1 = /ca[rt]\w?/; 
const tests = ['my car', 'bad cats', 'his cat', 'your cars'];

for (let str of tests) {
    console.log(reg1.test(str));
    // console.log(str.match(reg));
}

// true
// true
// true
// true

// this will work too!
let reg2 = /ca[rt]\w?/g; // note the 'g' option here
for (let str of tests) {
    console.log(reg2.test(str));
    console.log(str.match(reg2));
}
// true
// true
// true
// true
// true
// [ 'car' ]
// true
// [ 'cats' ]
// true
// [ 'cat' ]
// true
// [ 'cars' ]

// HOWEVER, this will NOT work:
let reg3 = /ca[rt]\w?/g; // note the 'g' option here
for (let str of tests) {
    console.log(reg3.test(str));
    // console.log(str.match(reg2));
}
// true
// true
// true
// true
// true
// [ 'car' ]
// true
// [ 'cats' ]
// true
// [ 'cat' ]
// true
// [ 'cars' ]
// true
// false   <---- why?
// true
// false   <---- why?