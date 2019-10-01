// question 1
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((a, b) => a.concat(b)))


// question 2
function loop(a, test, update, action) {
    if (test(a)) {
        action(a);
        loop(update(a), test, update, action)
    } 
}

function square(x) {
    return x ** 2;
}

// square(3);

loop(3, n => n > 0, n => n - 1, console.log);
loop(5, n => n > 0, n => n - 1, square);

// queation 3
function every(array, test) {
    return array.every(test);
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true