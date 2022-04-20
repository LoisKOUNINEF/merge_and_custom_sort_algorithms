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
