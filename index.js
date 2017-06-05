function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var oddNumbers = [3, 5, 5, 7, 27, 9]
  oddNumbers.forEach(callback)
  return oddNumbers;
}

function doToArray(array, callback) {
  array.forEach(callback)
}
