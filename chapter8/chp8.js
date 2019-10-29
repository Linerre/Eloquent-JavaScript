// Retry
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
	for (;;) {
		try {
			let result = primitiveMultiply(a, b);
			if (typeof result === 'number') { // signal when to break
				return result;
				break;
			}
		} catch (e) {
			if (e instanceof MultiplicatorUnitFailure) {
				continue; // > 0.2, go back to loop again
			} else {
				throw e;
			}
		}
	}
}



console.log(reliableMultiply(8, 8));
// console.log(primitiveMultiply(8, 8));
// → 64

// The Locked Box
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