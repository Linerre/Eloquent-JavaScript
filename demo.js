// This file is used to test some small chank of demo code
//Let's say, I happen to forget about one property of an object
// I use this file to test whther or not what I think would be right

// Most of the time this file is EMPTY
// Sometimes there are a few lines of code here
// But the code might be ugly and deadly wrong


// see the difference between the below two:

let test = function() {
    return 'Jessie creates this function';
}();

console.log(test);
// Jessie creates this function

let anotherTest = function() {
    return 'Jessie creates this function too'
};

console.log(anotherTest);
// [Function: anotherTest]

// setTimeout(() => console.log("Tick"), 5000);
console.log('Hello');

let message = 'Will Jessie like me?'
for (let i = 0; i < message.length; i += 1 ) {
    setTimeout(function() {
        console.log(message[i]);
    }, i * 100);
}
// not working like typewriter. Figure this out!