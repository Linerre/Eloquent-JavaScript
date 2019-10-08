// qustion2
let testArray1 = [1, 2, 3, 4],
    testArray2 = [];

class Group {
    constructor() {
        this.array = [];
    }
    
    add(element) {
            //if the array is empty
        if (this.array.length === 0) {
            this.array.push(element); // return array.push(element) would be wrong
            return this.array;
        } else if (this.array.includes(element)) {
            return `The ${element} exists already in the group.`;
        } else {
            this.array.push(element);
            return this.array;
        }
    }
    
    delete(element) {
        let index = this.array.indexOf(element);
        // let span = this.array.length;
        let firstHalf = this.array.slice(0, index),
            secondHalf = this.array.slice(index+1,);
        if (index === -1) {// element not in the array
            return `Can't delete ${element} because the original array does not contain it.`
        } else {// won't work since if element at the last postion, nothing will change
            return firstHalf.concat(secondHalf);
        }
    }
}


let group = new Group();

group.add(2)
group.add(5)
group.add(4)
console.log(group.delete(10))
// Can't delete 10 because the original array does not contain it.
group.add(10)
console.log(group)
// Group { array: [ 2, 5, 4, 10 ] }

console.log(group.add(2))
// The 2 exists already in the group.
group.delete(10)
console.log(group)
// Group { array: [ 2, 5, 4 ] }
