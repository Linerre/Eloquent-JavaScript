// This file is used to test some small chank of demo code
//Let's say, I happen to forget about one property of an object
// I use this file to test whther or not what I think would be right

// Most of the time this file is EMPTY
// Sometimes there are a few lines of code here
// But the code might be ugly and deadly wrong

// Regexp golf
let strlist =[
    str1 = 'car and cat',
    str2 = 'pop and prop and props',
    str3 = 'ferret, ferry, and ferrari',
    str4 = 'ambigous, ambitous, captious, 456ious, and previous',
    str5 = ' .  ,  :   ;  , usi',
    str6 = 'The regular expression should match only strings containing one of the substrings described.',
    str7 = 'Do not worry about word boundaries unless explicitly mentioned. When your expression works, see whether you can make it any smaller.'
];

let reglist = [
    regex1 = /ca[rt]\w?/,
    regex2 = /pr?op/,
    regex3 = /ferr(et|y|ari)/,
    regex4 = /[a-z]+ious/g,
    regex5 = /\s\W/g, // there is a problem with this
    regex6 = /\b\w{6,}\b/g,
    regex7 = /[^eE\W]+/g // need to correct
];


// console.log(strlist[0].match(reglist[0]));
// console.log(strlist[1].match(reglist[1]));
// console.log(strlist[2].match(reglist[2]));
// console.log(strlist[3].match(reglist[3]));
// console.log(strlist[4].match(reglist[4]));
// console.log(strlist[5].match(reglist[5]));
// console.log(strlist[6].match(reglist[6]));

