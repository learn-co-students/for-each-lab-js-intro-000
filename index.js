function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  });
}

function iterate(callback) {
  var primeNums = [2, 3, 5, 7, 11, 13, 17, 19]

  primeNums.forEach(callback)

  return primeNums
}

function doToArray(array, callback) {
  array.forEach(callback)
}
