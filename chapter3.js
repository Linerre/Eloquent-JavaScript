// question 1
function min(a, b) {
    let mini = 0;
    if (a > b) {
        mini = b;
    } else {
        mini = a;
    }
    return mini;
}

console.log(min(10, 25))

// question 2
function isEven(n) {
    // function cal()
    if (n === 0) {
        return true;
    } else if (n === 1) {
        return false;
    } else {
        // while(n > 1) {
            n -= 2;
        // }
    }
    return isEven(n);
    
}

console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(1002))
console.log(isEven(-1))


// question 3
function countBs(s) {
    let count = 0;
    for (let n = 0; n < s.length; n += 1) {
        if (s[n] === 'B') {
            count += 1;
        } //else {
            //count += 0;
        //}
    }
    return count;
}

console.log(countBs('Banana'))
console.log(countBs('BBC'))
console.log(countBs('apple'))
console.log(countBs('NBA BasketBall'))
console.log(countBs('BiBlioBeeBox'))

function countChar(s, t) {
    let count = 0;
    for (let n = 0; n < s.length; n += 1) {
        if (s[n] === t) {
            count += 1;
        }
    }
    return count;
}

console.log(countChar("kakkerlak", "k"))
console.log(countChar("string containing only one", "n"))
console.log(countChar("see whether", "e"))
console.log(countChar("always produces the same value", "a"))
