function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var colors = ['red', 'blue', 'green', 'yellow', 'white', 'black']
  colors.forEach(callback)
    return colors
}

function doToArray(array, callback) {
  array.forEach(callback)
}
