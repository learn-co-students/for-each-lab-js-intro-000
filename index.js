function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var fruits = ["watermelon", "apple", "peach", "pear"]
  fruits.forEach(callback)
  return fruits
}

function doToArray(array, callback) {
  array.forEach(callback)
}
