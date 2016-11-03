function iterativeLog(array) {
  array.forEach(element => {
  console.log(`${array.indexOf(element)}: ${element}`)
})
}

function iterate(callback) {
  var array = [1, 2, 3]
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  return array.forEach(callback)
}
