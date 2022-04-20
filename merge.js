const fs = require('fs');

const fileName = process.argv[2];

let dataArray = []
const turnIntoInteger = x => parseInt(x,10);

try {
  const data = fs.readFileSync(fileName, 'utf8');
  dataArray = data.split(' ').map(elem => turnIntoInteger(elem));
}
catch (error) {
  console.error(error.message);
}

console.log(`Initial array : ${dataArray}`)

class Result {

  constructor(arr) {
    this.counter = 0;
    this.sortedArray = this.mergeSort(arr);
  }

  mergeSort(arr) {
    const halfArray = arr.length / 2;
    if (arr.length <= 1) {
      return arr;
    }
    const firstHalf = arr.splice(0, halfArray);
    const secondHalf = arr;
    return this.merge(this.mergeSort(firstHalf), this.mergeSort(secondHalf))
  }

  merge(firstHalf, secondHalf) {
    let sortedArray = [];
    while (firstHalf.length && secondHalf.length) {
      this.counter++;
      if (firstHalf[0] < secondHalf[0]) {
        sortedArray.push(firstHalf.shift());
      }
      else {
        sortedArray.push(secondHalf.shift());
      }
    }
    return [...sortedArray, ...firstHalf, ...secondHalf];
  }
}

let mergeResult = new Result(dataArray);

console.log(`Merge sort algorythm : ${mergeResult.counter} comparisons.`)
console.log(mergeResult.sortedArray)
