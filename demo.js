// This file is used to test some small chank of demo code
//Let's say, I happen to forget about one property of an object
// I use this file to test whther or not what I think would be right

// Most of the time this file is EMPTY
// Sometimes there are a few lines of code here
// But the code might be ugly and deadly wrong

// Regexp golf
let str1 = 'car and cat',
    str2 = 'pop and prop',
    str3 = 'ferret, ferry, and ferrari'
    str4 = 'ambigous, ambitous, captious, 456ious, and previous'
    str5 = ' .,:;'
    str6 = 'The regular expression should match only strings containing one of the substrings described. '

let regex1 = /ca[rt]/y;
console.log(regex1.exec('cat and car'));