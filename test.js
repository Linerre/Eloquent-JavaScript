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


function parseINI(string) {
    // Start with an object to hold the top-level fields
    let result = {};
    let section = result;// if section = {}, it's hard to add properties into result
    string.split(/\r?\n/).forEach(line => {
      let match;
      if (match = line.match(/^(\w+)=(.*)$/)) {
        section[match[1]] = match[2];// match[1] = group 1; and so on
      } else if (match = line.match(/^\[(.*)\]$/)) {
        section = result[match[1]] = {};
      } else if (!/^\s*(;.*)?$/.test(line)) {
        throw new Error("Line '" + line + "' is not valid.");
      }
    });
    return result;
  }
  
console.log(parseINI(`name=Vasilis
[address]
city=Tessaloniki`));
// → {name: "Vasilis", address: {city: "Tessaloniki"}}

let target = `searchengine=https://duckduckgo.com/?q=$1
spitefulness=9.7
; comments are preceded by a semicolon..
; each section concerns an individual enemy

[larry]
fullname=Larry Doe
type=kindergarten bully
website=http://www.geocities.com/CapeCanaveral/11451

[davaeorn]
fullname=Davaeorn
type=evil wizard
outputdir=/home/marijn/enemies/davaeorn`

console.log(parseINI(target));