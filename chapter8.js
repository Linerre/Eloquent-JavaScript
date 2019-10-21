// Retry
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

for (;;) { // infinite loop
    try {
        function reliableMultiply(a, b) {
            return primitiveMultiply(a, b); // if an exception
        }
        break;
    } catch (e) { // comes here
        if (e instanceof MultiplicatorUnitFailure) {
            primitiveMultiply(a, b);
        } else {
            throw e;
        }
    } 
}



console.log(reliableMultiply(8, 8));
// console.log(primitiveMultiply(8, 8));
// → 64