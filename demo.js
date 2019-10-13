// This file is used to test some small chank of code
// as demo code which will be tranmited to test file later
class GroupIterator {
  constructor(group) {
    this.i = 0
    this.group = group
  }

  next() {
    if (this.i == this.group.array.length) {
      return {done: true};
    }
    let value = {postion: this.i;
                 value: this.group.get(i)};
}
