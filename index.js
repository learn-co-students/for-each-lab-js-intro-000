function iterativeLog (array) {
array.forEach((element, index) => {
  console.log(`${index}: ${element}`)
})
}

function iterate(callback) {
  const secCode = [8, 0, 4, 5]
  secCode.forEach(callback)
  return secCode
}

function doToArray(array, callback) {
  array.forEach(callback)
}
