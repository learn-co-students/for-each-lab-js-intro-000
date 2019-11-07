function iterativeLog(array) {
  array.forEach((elem, ind) => {
    console.log(`${ind}: ${elem}`)
  })
}

function iterate(callback) {
  var arr = [1, 3, 5, 7, 9]
  arr.forEach(callback)
  return arr
}

function doToArray(arr, callback) {
  arr.forEach(callback)
}
