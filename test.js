let testArray1 = [1, 2, 3, 4],
    testArray2 = [];

// console.log(testArray2.length)
let addElement = function(element, array) {
        //if the array is empty
    if (array.length === 0) {
        array.push(element); // return array.push(element) would be wrong
        return array;
    } else if (array.includes(element)) {
        return `The ${element} exists already in the original array.`;
    } else {
        array.push(element);
        return array;
    }
};   






console.log(addElement(2, testArray1))
console.log(addElement(5, testArray1))
// console.log(addElement(0, testArray1))
// console.log(addElement(4, testArray2))