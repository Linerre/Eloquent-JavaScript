function arrayToList (aArray) {
    let span = aArray.length;
    let result = {value: aArray[span-1], rest: null};
    // console.log(result);
    // let retrieval = 'value'
    // if (span % 2 == 0) {
    for (let n = span-1; n > 0; n -= 1) {
        result = {value: aArray[n-1], rest: result};
        // console.log(result);
    }
    // return JSON.stringify(result);
    return result;
}

// let testarray1 = [10, 20];
let testarray2 = [10, 20, 30];
// let testarray3 = [10, 20, 30, 40];
let testarray4 = [10, 20, 30, 40, 50, 60, 70];


// console.log(arrayToList(testarray3))
// console.log(arrayToList(testarray1))
// console.log(arrayToList(testarray2))
// console.log(arrayToList(testarray3))
console.log(arrayToList(testarray4))
console.log(Object.keys(arrayToList(testarray4)))

// function listToArray(aList) {
//     let conseq = [];
//     for (let node = aList; node; node = node.rest) {// learn this stuff!
//         conseq.push(node.value);
//     }
//     return conseq;
// }

// console.log(listToArray(arrayToList(testarray4)))

// function prepend(element, list) {
//     list = {value: element, rest: list};
//     return list;
// }

// console.log(prepend(10, prepend(20, null)));

// function nth(aList, index) {
//     let conseq = [];
//     for (let node = aList; node; node = node.rest) {// learn this stuff!
//         conseq.push(node.value);
//     }
//     return conseq[index];
// }

// console.log(nth(arrayToList([10, 20, 30]), 1));
// console.log(nth(arrayToList([10, 20, 30]), 3));
// console.log(nth(arrayToList([10, 20, 30]), 0));

let aTestList = {
    value: 10, rest: {
        value: 20, rest: {
            value: 30, rest: null
        }
    }
};
console.log(aTestList.value)
console.log(aTestList.rest)

function nthRecursive (aList) {
    let conseq = [];
    conseq.push(aList.value);
    nthRecursive(aList.rest);
    return conseq;
}

console.log(nthRecursive(aTestList))


// question 4
// Come up with my own solution here
// ... solution ...
//



// NOT MY ANSWER
function deepEqual(a, b) {
    // first check if they are the same value of the same type
    // note by 'value' it means they are not list, array ...
    if (a === b) return true;

    // second check if they are null or not objects
    if (a == null || 
        b == null ||
    typeof a != 'object' || 
    typeof b != 'object' ) {
        return false;
    }

    // begin to loop over the properties
    var propsInA = 0, propsInB = 0;
	//for-in loop counts the number of properties in a and b
    for (var prop in a) {propsInA += 1}

    for (var prop in b) {
        propsInB += 1;
    //if b has a prop not in a or if, upon recursive function all,
    //the properties don't have the same values, return false
        if (!(prop in a) || !deepEqual(a[prop], b[prop])) return false;
    } 
	//otherwise, return whether the number of properties are the same
    return propsInA == propsInB;
    
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true