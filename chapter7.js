// chapter 7 Robot project
// Persistent group
class PGroup {
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
}
  
let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");
  
console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false