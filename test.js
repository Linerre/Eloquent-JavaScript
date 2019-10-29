// This test.js file is used to test my ideas before I 
// place the code to a chapter_i file as my final solution
// Sometimes it is empty
// Sometimes it contains code that may not work
// For code that do work, please refer to chapter_i file, 
// where i points to the corresponding chapter number

verify(regex1,
    ["my car", "bad cats"],// will not catch 'cats'
    ["camper", "high art"]);

verify(regex2,
    ["pop culture", "mad props"],
    ["plop", "prrrop"]);

verify(regex3,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);

verify(/.../,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

verify(/.../,
    ["bad punctuation ."],
    ["escape the period"]);

verify(/.../,
    ["hottentottententen"],
    ["no", "hotten totten tenten"]);

verify(/.../,
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