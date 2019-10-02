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

var addElement = function(element, array) {
    //if the array is empty
    if (array.length === 0) {
        array.push(element); // return array.push(element) would be wrong
        return array;
    } else {
        for (let i of array) {
            // let index = array.indexOf(i);
            if (i === element) {
                return `The ${element} exists already in ${array}.`;
            } else {
                // works but need to be improved a bit
                // since Array will be changed every time
                return addElement(element, array.slice(1,))
            }
        } 
        return array;
    }
    
};

console.log(addElement(4, testArray1))
// console.log(addElement(0, testArray1))
// console.log(addElement(4, testArray2))


