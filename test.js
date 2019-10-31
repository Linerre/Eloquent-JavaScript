// This test.js file is used to test my ideas before I 
// place the code to a chapter_i file as my final solution
// Sometimes it is empty
// Sometimes it contains code that may not work
// For code that do work, please refer to chapter_i file, 
// where i points to the corresponding chapter number

//Quoting style
let text = "'I'm the cook,' he said, 'it's my job.' 'You're right!'";
// Change this call.
// console.log(text.replace(/'\w+'\w+\s[\w\s,.!?]+'/g, "$&"));
// → "I'm the cook," he said, "it's my job." 

// this way will not work since it is quite the opposite of the right one
// think about it! 
// when the match is 'I'm the cook,', how can you use a string as a whole
// to replace the original one? the target should be the very single quotes!
// so you are likely to think in the other way around.

//however, using a function as the 2nd arg of .replace method
//could solve the problem, though it is NOT smart
console.log(text.replace(/'\w+'\w+\s[\w\s,.!?]+'/g, str => {return '"' + str.slice(1, -1) + '"'; }))
// "I'm the cook," he said, "it's my job."

// method two
console.log(text.replace(/'([\w]+\W)([^']+\W)'/g, "\"$1$2\""))