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


const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
  };
  
function withBoxUnlocked(body) {
    if (box.locked) {// make sure it is unlocked before I open it
        box.unlock(); //unlock it
        try { // execute it in a try block and use finally to make sure the box gets locked in any way
            body();
        } finally { //and use finally to make sure the box gets locked in any way
            box.lock();
        }
    } else {// else lock it first!
        console.log('The box seems to be locked?');
        console.log(box.locked);
        console.log('Let\'s lock it first!');
        box.lock();
        console.log('Locked?');
        console.log(box.locked);
        withBoxUnlocked(body); // then try again;
    }
    
}
  

console.log(box.locked);
//true

box.unlock();

withBoxUnlocked(function() {
    box.content.push('leon')
});
// The box seems to be locked?
// false
// Let's lock it first!
// Locked?
// true


withBoxUnlocked(function() {
    box.content.push("gold piece"); // will this work? it should i think
});

box.unlock();
console.log(box.content);
// ['leon', 'gold piece']
box.lock();

console.log(box.locked);
//true

  
try {
    withBoxUnlocked(function() {
      throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised: " + e);
}

console.log(box.locked);
  // → true