function iterativeLog(array) {
  array.forEach({console.log(`${index}: ${element}`)} )
}

function iterate(callback) {
  array=[0,1,2]
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
