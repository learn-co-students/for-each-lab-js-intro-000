function iterativeLog(array) {
  function logFunction(element, index, array) {
    console.log(`${index}: ${element}`)
  }
  array.forEach(logFunction)
}

function iterate(callback) {
  newArray = ['banana', 'fofana']
  newArray.forEach(callback)
  return newArray
}

function doToArray(array, callback) {
  array.forEach(callback)
}
