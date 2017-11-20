function callback(element, index) {
  console.log(`${index}: ${element}`);
}

function iterativeLog(array) {
  array.forEach(callback);
}

function iterate(callback) {
  var testArray = [12, 21, 24, 42];
  testArray.forEach(callback);
  return testArray;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
