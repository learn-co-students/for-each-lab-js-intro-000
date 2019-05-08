function iterativeLog(array) {
  array.forEach((element, index) => console.log (`${index}: ${element}`))
}

function iterate(callback) {
  var secondArray = [1, 2, 3]
  secondArray.forEach(callback)
  return secondArray
}

function doToArray (array, callback) {
  array.forEach(callback)
}
