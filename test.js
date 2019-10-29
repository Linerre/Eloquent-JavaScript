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

let reg = /ca[rt]\w?/;
const tests = ['my car', 'bad cats', 'his cat', 'your cars'];
for (let str of tests) {
    console.log(reg.test(str));
    // console.log(str.match(reg));
}