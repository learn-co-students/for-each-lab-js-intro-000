function iterativeLog(array) {
  array.forEach((element, index) => {console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var array = ["dog", "cat", "mouse"];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
