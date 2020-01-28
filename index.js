function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var fruits = [apple, peach, pear, plum]
  fruits.forEach(callback)
  return fruits
}

function doToArray(array, callback) {
  array.forEach(callback)
} 
