function iterativeLog(array) {
  array.forEach((element, index, array) => {
    debugger
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var array = [123]
  array.forEach(callback)
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback)
}
