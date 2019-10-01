// question 1

function range(start, end, step) {
    let result = [];
    for (let n = start; n <= end; n += 1) {
        result.push(n);
    }
    return result
}

console.log(range(1, 10))

function range(start, end, step) {
    let result = [];
    if (step == undefined || step == null || step == 0) {
        for (let n = start; n <= end; n += 1) {
            result.push(n)
        } 
    } 
    if (step > 1) {
        for (let n = start; n <= end; n += step) {
            result.push(n)
        }
    }
    if (step < 0) {
        for (let n = start; n >= end; n += step) {
            result.push(n)
        }
    }
    return result;
}

function sum(range) {
    let list = range;
    let total = 0;
    for (let num of list) {
        total += num;
    }
    return total;
}

console.log(range(1, 10))
console.log(range(1, 10, 4))
console.log(range(1, 10, 0))
console.log(range(1, 10, 2))
console.log(range(5, 2, -1))

console.log(sum(range(1, 10)))
console.log(sum(range(5, 2, -1)))

// question 2
function reverseArray(list) {
    let result = [];
    let index;
    for (let element of list) {
        index = list.indexOf(element);
        result.unshift(list[index])
    }
    return result;
}

let testList1 = ['A', 'B', 'C', 'D'];
let testList2 = [1, 2, 3, 4, 5]
let testList3 = [1, 2, 3, 4, 5, 6]
// console.log(reverseArray(testList1));
// console.log(reverseArray(testList2));

function reverseArrayInPlace(aList) {
    let n = aList.length;
    let middleElement = aList[Math.floor(n/2)];
    let box;
    if (n % 2 == 0) {
        for (let m = 0; m < n/2; m += 1) {// not equal!!
            box = aList[m];
            aList[m] = aList[n-1-m];
            aList[n-1-m] = box;
        }
    }

    if (n % 2 !== 0) {
        
        for (let m = 0; m < n/2; m += 1) {
            box = aList[m];
            aList[m] = aList[n-1-m];
            aList[n-1-m] = box;
        }
        aList[Math.floor(n/2)] = middleElement;
    }
    return aList;
}

console.log(reverseArrayInPlace(testList2))
console.log(reverseArrayInPlace(testList3))

// question 3
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
    return JSON.stringify(result);
}

// let testarray1 = [10, 20];
// let testarray2 = [10, 20, 30];
// let testarray3 = [10, 20, 30, 40];
let testarray4 = [10, 20, 30, 40, 50, 60, 70];


// console.log(arrayToList(testarray3))
// console.log(arrayToList(testarray1))
// console.log(arrayToList(testarray2))
// console.log(arrayToList(testarray3))
console.log(arrayToList(testarray4))

function listToArray(aList) {
    let conseq = [];
    for (node = aList; node; node = node.rest) {// learn this stuff!
        conseq.push(node.value);
    }
    return conseq;
}

console.log(listToArray(arrayToList(testarray4)))

function prepend(element, list) {
    list = {value: element, list};
    return list;
}

console.log(prepend(10, prepend(20, null)));

function nth(aList, index) {
    let conseq = [];
    for (node = aList; node; node = node.rest) {// learn this stuff!
        conseq.push(node.value);
    }
    return conseq[index];
}

console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(nth(arrayToList([10, 20, 30]), 3));
console.log(nth(arrayToList([10, 20, 30]), 0));

let test = {value: 10, rest: null}
console.log(Object.keys(test))

let aTestList = {
    value: 10, rest: {
        value: 20, rest: {
            value: 30, rest: null
        }
    }
};
// console.log(aTestList.value)
// console.log(aTestList.rest)
console.log(Object.keys(aTestList).length)


function nthRecursive(aList, index) {
        // key = Object.keys(aList),
        // span = key.length;
    // for (let n = span-1; n>0 && aList.rest !== null; n-=1) {
    if (index === 0) {
        return aList.value;
    } 
    if (index !== 0) {
       return nthRecursive(aList.rest, index-1);
    }
}

console.log(nthRecursive(aTestList, 1))
console.log(nthRecursive(arrayToList([10, 20, 30]), 1));

// question 4
