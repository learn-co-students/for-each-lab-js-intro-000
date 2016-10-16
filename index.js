function iterativeLog(array) {
  array.forEach(function(element, index, array) {
      console.log(`${index}: ${element}`)
  });
}

function iterate(callback) {
  newArray = [1, 2, 3, 4, 5];
  newArray.forEach(callback)
  return newArray
}

function doToArray(array, callback) {
  array.forEach(callback)
}
