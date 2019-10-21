// Retry
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

for (;;) {
    try {
        function reliableMultiply(a, b) {
            return primitiveMultiply(a, b);
        }
        break;
    } catch (e) {
        if (e instanceof MultiplicatorUnitFailure) {
            console.log('What\'s wrong?');
        } else {
            throw e;
        }
    } 
}



// console.log(reliableMultiply(8, 8));
console.log(primitiveMultiply(8, 8));
// → 64