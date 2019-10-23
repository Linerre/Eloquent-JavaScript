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
	// Your code here.
  }
  
  withBoxUnlocked(function() {
	box.content.push("gold piece");
  });
  
  try {
	withBoxUnlocked(function() {
	  throw new Error("Pirates on the horizon! Abort!");
	});
  } catch (e) {
	console.log("Error raised: " + e);
  }
  console.log(box.locked);
  // → true