function iterativeLog(arrayIn) {
  arrayIn.forEach(displayElem);
}

function displayElem(element, index, array) {
  console.log(`${index}: ${element}`);
}

function iterate(callback) {
  var xyz = [123, 456, 789, 012, 345, 678, 901];
  xyz.forEach(callback);
  return xyz;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
