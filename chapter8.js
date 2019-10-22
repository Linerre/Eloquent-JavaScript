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
			primitiveMultiply(a, b); // but no break! Will loop forever!
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