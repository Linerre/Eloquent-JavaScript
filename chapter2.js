// // question 1
// let content = '';
// for (let counter = 0; counter < 7; counter += 1) {
//     console.log(content += '#')
// }

// let outPut = '';
// for (let count = outPut.length; count < 7; count +=1) {
//     outPut += '#';
//     console.log(outPut)
// }

// question 2
// for (let n = 1; n < 101; n += 1) {
//     if (n % 3 === 0 && n % 5 ===0) {
//         console.log('FuzzBuzz');
//     } else if (n % 3 === 0){
//         console.log('Fuzz');
//     } else if (n % 5 === 0) {
//         console.log('Buzz')
//     } else {
//         console.log(n);
//     }
// }

// question 3
let n = 1, m = 1, size = 8;
let result = '';
while ( m < size * (size + 1)) {
    if (m % (size+1) === 0) {
        result += '\n';
    } else if (n % 2 !== 0){
        result += ' ';
    } else {
        result += '#';
    }
    n += 1;
    m += 1;
}

console.log(result)
