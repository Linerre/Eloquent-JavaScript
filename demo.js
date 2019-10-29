// This file is used to test some small chank of demo code
//Let's say, I happen to forget about one property of an object
// I use this file to test whther or not what I think would be right

// Most of the time this file is EMPTY
// Sometimes there are a few lines of code here
// But the code might be ugly and deadly wrong


let str = '"I love cats"';
console.log(str[0]);

function doubleToSingle(str) {
    return '"' + str.slice(1, -1) + '"';
}

console.log(doubleToSingle(str));