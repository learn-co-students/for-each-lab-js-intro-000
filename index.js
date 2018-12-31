function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var arr = [1, 2, 3]
  callback(arr)
  return arr
}

function doToArray(array, callback) {
  array.forEach(callback)
}
