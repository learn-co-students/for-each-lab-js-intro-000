function iterativeLog(array) {
  array.forEach(function (element, index, array) {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var arr = ['ponies', 'puppies', 'kitties']

  arr.forEach(callback)

  return arr
}

function doToArray(array, callback) {
  array.forEach(callback)
}
