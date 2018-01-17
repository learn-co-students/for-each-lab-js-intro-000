function iterativeLog(array) {
  array.forEach(logItemsToConsole)
}

function logItemsToConsole(item, index) {
  console.log(`${index}: ${item}`);
}

function iterate(callback) {
  var array = [1, 2, 3, 5, 8, 13];
  
  array.forEach(callback);
  
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback);
}