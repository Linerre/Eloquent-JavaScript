//Regex Golf
// Fill in the regular expressions

verify(/ca[rt]\w?/,
    ["my car", "bad cats"],// will not catch 'cats'
    ["camper", "high art"]);

verify(/pr?op/,
    ["pop culture", "mad props"],
    ["plop", "prrrop"]);

verify(/ferr(et|y|ari)/,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);

verify(/\b[a-z]+ious\b/,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

verify(/ [.,;:]/,
    ["bad punctuation ."],
    ["escape the period"]);

verify(/\w{7,}/,
    ["hottentottententen"],
    ["no", "hotten totten tenten"]);

verify(/\b[a-df-zA-DF-Z]+\b/,
    ["red platypus", "wobbling nest"],
    ["earth bed", "learning ape", "BEET"]);

function verify(regexp, yes, no) {
    if (regexp.source == "...") return; // Ignore unfinished exercises
    for (let str of yes) if (!regexp.test(str)) {
        console.log(`Failure to match '${str}'`);
    }
    for (let str of no) if (regexp.test(str)) {
        console.log(`Unexpected match for '${str}'`);
    }
}

// Quoting style
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
// Method One
console.log(text.replace(/'\w+'\w+\s[\w\s,.!?]+'/g, str => {return '"' + str.slice(1, -1) + '"'; }))
// "I'm the cook," he said, "it's my job."

// method Two
console.log(text.replace(/'([\w]+\W)([^']+\W)'/g, "\"$1$2\""))