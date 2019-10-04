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

// ================================================    
// solution 1: using ====
function add(element, array) {
    let result = array;
    let addElement = function(element, array) {
        //if the array is empty
        if (array.length === 0) {
            array.push(element); // return array.push(element) would be wrong
            return array;
        } else {
            for (let i of array) {
                if (i === element && array.length !==1) {//condition1: element appears anywhere but last;
                    return `The ${element} exists already in the original array.`;
                } else if (i === element && array.length === 1) {//condition2: element appears last
                    return `The ${element} exists already in the original array.`;
                } else if (i !== element && array.length === 1) {//condition3: element never appears
                    array.push(element)
                    return array.slice(1,)
                } else {// tail recursive
                    return addElement(element, array.slice(1,)); 
                }
            } 
        }  
    };

    if (typeof addElement(element, array) === 'string') {
        return addElement(element, array);
    }
    else {
        console.log(`${element} has been added successfully!`)
        return result.concat(addElement(element, array));
    }
}

//it's hard to copy an array without affecting the original;
//so I tried to embed the adding element function into a function-envi 
//so that the var outside the adding func will remain unchanged


// ================================================    
// solution 2: using .includes() && .indexOf()

console.log(add(4, testArray1))
console.log(add(5, testArray1))
console.log(add(0, testArray1))
console.log(add(4, testArray2))

