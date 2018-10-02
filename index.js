function iterativeLog(array) {
  array.forEach(element, index => {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback) {
  const num = [1,2,3];
  num.forEach(callback)
  return num
}

function doToArray(array, callback) {
  array.forEach(callback)
}