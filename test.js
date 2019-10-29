// This test.js file is used to test my ideas before I 
// place the code to a chapter_i file as my final solution
// Sometimes it is empty
// Sometimes it contains code that may not work
// For code that do work, please refer to chapter_i file, 
// where i points to the corresponding chapter number

// Borrowing a Method
// The solution can be found and has been well explained by
// MDN doc at here: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty


// This is why I often fear I misunderstand the author.
// When she said 'borrowing a method', I was thinking of inheritance so far as to create 
// a new one myself. But the solution is quite simple and self-explainatory

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