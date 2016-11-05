function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var food = ['hot dogs', 'hamburgers', 'steak']
  food.forEach(callback)
  return food
}

function doToArray(array, callback) {
  array.forEach(callback)
}
