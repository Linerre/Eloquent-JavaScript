// question1
class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vector) {
        this.x = this.x + vector.x;
        this.y = this.y + vector.y;
        return {x: this.x, y: this.y}
    }

    minus(vector) {
        this.x = this.x - vector.x;
        this.y = this.y - vector.y;
        return {x: this.x, y: this.y}
    }

    get length() {
        return Math.sqrt(this.x**2 + this.y**2); 
    }
}

var vector1 = new Vec(1, 2);
console.log(vector1)


console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

// qustion2
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
