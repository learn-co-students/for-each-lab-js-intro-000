function iterativeLog(array) {
  array.forEach((n, index, array) => {
  console.log(`${index}: ${n}`)
})
}

function iterate(callback) {
  testArray = [3,2,1]
  testArray.forEach(callback);
  return testArray;
}

function doToArray(array, callback) {
  array.forEach(callback)
}
