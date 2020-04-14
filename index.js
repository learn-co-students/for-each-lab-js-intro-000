
function iterativeLog(array) {
  array.forEach(function (element, index) {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var array = [5.13, 5.14]
  array.forEach(callback)
  return array
}


function doToArray(array, callback) {
  array.forEach(callback)
}
