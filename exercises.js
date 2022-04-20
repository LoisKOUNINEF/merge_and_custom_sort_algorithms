// const line = '#'
// console.log(line.repeat(50))
const createLine = () => {
  let line = '';
  for (let i = 0; i < 50; i++) { line += '*'; }
    console.log(line);
}

//  First subject

// Array and some k values for first subject (exercises 1, 3 & 5)
firstSubjectArray = [10, 15, 3, 7];
k1 = 17;
k2 = 32;
k3 = 25;
k4 = 28;

console.log('');
createLine();
console.log(`Initial array for first subject : ${firstSubjectArray}`);
console.log(`k1 value to test: ${k1}. Should return true.`);
console.log(`k2 value to test: ${k2}. Should return false.`);
console.log(`k3 value to test: ${k3}. Should return true.`);
console.log(`k4 value to test: ${k4}. Should return false.`);
createLine();
console.log('');

// Exercise 1
function checkSum(arr, k) {
  let counter = 0;
  let arrayLength = arr.length;
  for (i = 0; i < arrayLength; i++) {
    for (j = i + 1; j < arrayLength - i; j++) {
      counter++;
      if (k == arr[i] + arr[j]) {
        console.log(`Number of comparisons: ${counter}`);
        return true;
      }
    }
  }
  console.log(`Number of comparisons: ${counter}`);
  return false;
}

createLine();
console.log("First subject, first exercise :");
createLine();
console.log(`Does the array contain 2 numbers whose sum is equal to k1 ? ${checkSum(firstSubjectArray, k1)}`);
createLine();
console.log(`Does the array contain 2 numbers whose sum is equal to k2 ? ${checkSum(firstSubjectArray, k2)}`);
createLine();
console.log(`Does the array contain 2 numbers whose sum is equal to k3 ? ${checkSum(firstSubjectArray, k3)}`);
createLine();
console.log(`Does the array contain 2 numbers whose sum is equal to k4 ? ${checkSum(firstSubjectArray, k4)}`);
createLine();
console.log('');

// Exercise 3
function checkSumBetter(arr, k) {
  let counter = 0;
  let arrayLength = arr.length;
  for (i = 0; i < arrayLength; i++) {
    let tempArray = [...arr];
    tempArray.splice(i, 1);
    counter++;
    let checkDiff = k - arr[i];
    if (tempArray.includes(checkDiff)) {
      console.log(`Number of comparisons: ${counter}`);
      return true;
    }
  }
  console.log(`Number of comparisons: ${counter}`);
  return false
}

createLine();
console.log("First subject, second exercise :");
createLine();
console.log(`Does the array contain 2 numbers whose sum is equal to k1 ? ${checkSumBetter(firstSubjectArray, k1)}`);
createLine();
console.log(`Does the array contain 2 numbers whose sum is equal to k2 ? ${checkSumBetter(firstSubjectArray, k2)}`);
createLine();
console.log(`Does the array contain 2 numbers whose sum is equal to k3 ? ${checkSumBetter(firstSubjectArray, k3)}`);
createLine();
console.log(`Does the array contain 2 numbers whose sum is equal to k4 ? ${checkSumBetter(firstSubjectArray, k4)}`);
createLine();
console.log('');

// Exercise 5
function checkSumBest(arr, k) {
  let counter = 0;
  let arrayLength = arr.length;
  let tempArray = [];
  for (i = 0; i < arrayLength; i++) {
    counter++
    let checkDiff = k - arr[i];
    if (tempArray[checkDiff] !== undefined) {
      console.log(`Number of comparisons: ${counter}`);
      return true;
    }
    else {
      tempArray[arr[i]] = '';
    }
  }
  console.log(`Number of comparisons: ${counter}`);
  return false;
}

createLine();
console.log("First subject, third exercise :");
createLine();
console.log(`Does the array contain 2 numbers whose sum is equal to k1 ? ${checkSumBest(firstSubjectArray, k1)}`);
createLine();
console.log(`Does the array contain 2 numbers whose sum is equal to k2 ? ${checkSumBest(firstSubjectArray, k2)}`);
createLine();
console.log(`Does the array contain 2 numbers whose sum is equal to k3 ? ${checkSumBest(firstSubjectArray, k3)}`);
createLine();
console.log(`Does the array contain 2 numbers whose sum is equal to k4 ? ${checkSumBest(firstSubjectArray, k4)}`);
createLine();
console.log('');

// Second subject

// Arrays used for second subject (exercises 2, 4, 6)
secondSubjectFirstArray = [3, 7, 8, 3, 6, 1];
secondSubjectSecondArray = [1, 4, 5, 8];

createLine();
console.log(`First array for second subject : ${secondSubjectFirstArray}. Should return 3.`);
console.log(`Second array for second subject : ${secondSubjectSecondArray}. Should return 1.`);
createLine();
console.log('');

// Exercise 2
function checkView(arr) {
  let counter = 0;
  let arrayLength = arr.length;
  let freeViewCounter = 0;
  for (i = 0; i < arrayLength; i++) {
    let freeView = true;
    for (j = i + 1; j < arrayLength; j++) {
      counter++;
      if (arr[i] <= arr[j]) {
        freeView = false;
      }
    }
    if (freeView) freeViewCounter++;
  }
  console.log(`Number of comparisons: ${counter}`);
  return freeViewCounter;
}

createLine();
console.log('Second subject, first exercise :');
createLine();
console.log(`Number of buildings with free view on sunset : ${checkView(secondSubjectFirstArray)}.`);
createLine();
console.log(`Number of buildings with free view on sunset : ${checkView(secondSubjectSecondArray)}.`);
createLine();
console.log('');

// Exercise 4
function checkViewBetter(arr) {
  let counter = 0;
  let freeViewCounter = 0;
  let arrayLength = arr.length;
  for (i = 0; i < arrayLength; i++) {
    counter++;
    let tempArray = arr.slice(i + 1);
    if(Math.max(...tempArray) < arr[i]) {
      freeViewCounter++;
    }
  }
  console.log(`Number of comparisons: ${counter}`);
  return freeViewCounter;
}

createLine();
console.log('Second subject, second exercise :');
createLine();
console.log(`Number of buildings with free view on sunset : ${checkViewBetter(secondSubjectFirstArray)}.`);
createLine();
console.log(`Number of buildings with free view on sunset : ${checkViewBetter(secondSubjectSecondArray)}.`);
createLine();
console.log('');

// Exercise 6
