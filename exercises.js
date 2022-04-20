// const line = '#'
// console.log(line.repeat(50))
const createLine = () => {
  let line = '';
  for (let i = 0; i < 50; i++) { line += '*'; }
    console.log(line);
}

// Array and some k values for first subject (exercises 1, 3 & 5)
firstSubjectArray = [10, 15, 3, 7];
k1 = 17;
k2 = 32;
k3 = 25;
k4 = 28;

console.log('');
createLine();
console.log(`Initial array for first subject : ${firstSubjectArray}`);
console.log(`k1 value to test: ${k1} => should return true`);
console.log(`k2 value to test: ${k2} => should return false`);
console.log(`k3 value to test: ${k3} => should return true`);
console.log(`k4 value to test: ${k4} => should return false`);
createLine();
console.log('');

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
console.log(`Does the array contain 2 numbers which sum is equal to k1 ? ${checkSum(firstSubjectArray, k1)}`);
createLine();
console.log(`Does the array contain 2 numbers which sum is equal to k2 ? ${checkSum(firstSubjectArray, k2)}`);
createLine();
console.log(`Does the array contain 2 numbers which sum is equal to k3 ? ${checkSum(firstSubjectArray, k3)}`);
createLine();
console.log(`Does the array contain 2 numbers which sum is equal to k4 ? ${checkSum(firstSubjectArray, k4)}`);
createLine();
console.log('');


// Arrays used for second subject (exercises 2, 4, 6)
secondSubjectFirstArray = [3, 7, 8, 3, 6, 1];
secondSubjectSecondArray = [1, 4, 5, 8];

createLine();
console.log(`First array for second subject : ${secondSubjectFirstArray}`);
console.log(`Second array for second subject : ${secondSubjectSecondArray}`);
createLine();
console.log('');

function checkView(arr) {
  let counter = 0;
  let arrayLength = arr.length;
  let freeViewCounter = 0;
  for (i = 0; i < arrayLength; i++) {
    let freeView = true;
    for (j = i + 1; j < arrayLength; j++) {
      counter++
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
