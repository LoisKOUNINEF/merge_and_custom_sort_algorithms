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

createLine();
console.log(`Initial array for first subject : ${firstSubjectArray}`);
createLine();
console.log(`k1 value to test: ${k1} => should return true`);
console.log(`k2 value to test: ${k2} => should return false`);
console.log(`k3 value to test: ${k3} => should return true`);
console.log(`k4 value to test: ${k4} => should return false`);
createLine();

function checkSum(arr, k) {
  let counter = 0;
  let arrayLength = arr.length;
  for (i = 0; i < arrayLength; i++) {
    for(j = i + 1; j < arrayLength; j++) {
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

console.log("First subject, first exercise :");
createLine();
console.log(checkSum(firstSubjectArray, k1));
createLine();
console.log(checkSum(firstSubjectArray, k2));
createLine();
console.log(checkSum(firstSubjectArray, k3));
createLine();
console.log(checkSum(firstSubjectArray, k4));
createLine();
