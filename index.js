function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var array1 = [1, 1, 1, 1];
  array1.forEach(callback);
  return array1;
}

function doToArray(array, callback) {
  array.forEach(callback)
}
