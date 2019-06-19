function iterativeLog(array) {
  array.forEach(helpMe);
}

function helpMe(element, index) {
  console.log(`${index}: ${element}`);
}

function iterate(callback) {
  let myArray = [1,2,3];
  myArray.forEach(callback);
  return myArray;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
