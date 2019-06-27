function iterativeLog(array) {
  array.forEach((element, index) => console.log(`${index}: ${element}`) )
}

function iterate(callback) {
  var arr = [1, 3, 5, 7]
  arr.forEach(callback)
  return arr
}

function doToArray(array, callback) {
  array.forEach(callback)
}
