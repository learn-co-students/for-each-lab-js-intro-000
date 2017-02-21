// index iterativeLog(array) logs each element with the format `${index}: ${element}`
function logElement(element, index) {
  console.log(`${index}: ${element}`);
}

function iterativeLog(array) {
  array.forEach(logElement);
}

// index iterate(callback) calls the callback on an internal array, then returns the array
function iterate(callback) {
  var array = ["Abdullah"];
  array.forEach(callback);
  return array;
}

// index doToArray(array, callback) uses `callback` as the callback for `array`.forEach
function doToArray(array, callback) {
  array.forEach(callback);
}
