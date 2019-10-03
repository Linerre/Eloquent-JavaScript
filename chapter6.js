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
        let tempo = array.slice(); 
        for (let i of tempo) {
            if (i === element && tempo.length !==1) { // condition1: element appears anywhere before last
                console.log(array);
                return `The ${element} exists already in the original array.`;
            } else if (i === element && tempo.length === 1) { //condition2: element appears last
                console.log(array);
                return `The ${element} exists already in the original array.`;
            } else if (i !== element && tempo.length === 1) {//condition3: element never appears
                console.log(array);
                array.push(element);
                return array;
            } else {// tail recursive
                console.log(array);
                return addElement(element, tempo.slice(1,));
            }
        } 
    }
    
};

//won't work either since tempo still ponits to array and will affect it!
//let's try to make an empty array and reload it in every loop!

console.log(addElement(4, testArray1))
console.log(addElement(5, testArray1))
console.log(addElement(0, testArray1))
console.log(addElement(4, testArray2))
// The 4 exists already in the original array.
// [ 1, 2, 3, 4 ]
// [ 2, 3, 4 ]
// [ 3, 4 ]
// [ 4 ]
// [ 4, 5 ]
// [ 1, 2, 3, 4 ]
// [ 2, 3, 4 ]
// [ 3, 4 ]
// [ 4 ]
// [ 4, 0 ]
// [ 4 ]
