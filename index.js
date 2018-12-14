function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const numbers = [2, 4, 5, 2]
  numbers.forEach(callback)
  return numbers
}

function doToArray(array, callback) {
  array.forEach(callback)
}
