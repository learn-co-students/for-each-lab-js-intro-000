function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}
//passed
function iterate(callback) {
  var luckyNumbers = [2, 11, 17, 4, 7]
  luckyNumbers.forEach(callback)
  return luckyNumbers
}

function doToArray(array, callback) {
  array.forEach(callback);
}
//passed
