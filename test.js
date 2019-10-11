// qustion2
let testArray1 = [1, 2, 3, 4],
    testArray2 = [20, 'NYU', 'Jessie'];

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
        let span = this.array.length;
        let firstHalf = this.array.slice(0, index),
            secondHalf = this.array.slice(index+1,);
        if (index === -1) {// element not in the array
            return `Can't delete ${element} because the original array does not contain it.`
        } else if (index === span - 1) {//if element at the last postion, pop it!
            return this.array.pop(element);
        } else {// element in the middle
            return firstHalf.concat(secondHalf);
        }
    }

    has(element) {
        if(this.array.includes(element)) {
            return true;
        } else {
            return false;
        }
    }

    static from(anArray) {
        for (let element of anArray) {
           return new Group() //?
        }
    }

}


let group = new Group();
let groupTwo = Group.from(testArray2)

group.add(2)
group.add(5)
group.add(4)

console.log(groupTwo.has('NYU'))
//true

console.log(groupTwo)
console.log(groupTwo.delete('10'))
//
console.log(groupTwo.delete(20))
//
console.log(groupTwo)



console.log(group.delete(10))
// Can't delete 10 because the original array does not contain it.
group.add(10)
console.log(group)
// Group { array: [ 2, 5, 4, 10 ] }

console.log(group.add(2))
// The 2 exists already in the group.
group.delete(10)
console.log(group.has(5))
//true
console.log(group.has(10))
//false


console.log(group)
// Group { array: [ 2, 5, 4 ] }
