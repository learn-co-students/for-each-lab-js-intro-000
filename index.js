function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var array = new Array([3, 7, 12, 18, 54, 23])
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
