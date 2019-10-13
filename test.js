// This test.js file is used to test my ideas before I 
// place the code to a chapter_i file as my final solution
// Sometimes it is empty
// Sometimes it contains code that may not work
// For code that do work, please refer to chapter_i file, 
// where i points to the corresponding chapter number

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
        } else if (index === span - 1) {//element at the last postion
            this.array.pop(element);
            return this.array;
        } else if (index === 0) {//element at the beginning
            this.array.shift(element);
            return this.array;
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
        let insider = new Group();
        for (let element of anArray) {
            insider.add(element);
        }
        return insider;
    }

    [Symbol.iterator]() {
        let index = 0;
        let grouper = this.array;
        return {
            next: () => {
                if (index < grouper.length) {
                    let element = grouper[index];
                    index += 1;
                    return { value: element, done: false }
                } else {
                    return { done: true }
                }
            }    
        }   
    }
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c

// // test groupTwo
// let groupTwo = Group.from(testArray2)
// console.log(groupTwo.has('NYU'))
// //true
// console.log(groupTwo)
// //Group { array: [ 20, 'NYU', 'Jessie' ] }
// console.log(groupTwo.delete('10'))
// // Can't delete 10 because the original array does not contain it.
// groupTwo.delete(20)
// //
// console.log(groupTwo)
// // [ 'NYU', 'Jessie' ]
