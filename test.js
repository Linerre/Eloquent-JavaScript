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
            return `The ${element} exists already in the group`;
        } else {
            this.array.push(element);
            return this.array;
        }
    }  
}


let group = new Group();

group.add(2)
group.add(5)
group.add(4)
console.log(group.add(2))
console.log(group)