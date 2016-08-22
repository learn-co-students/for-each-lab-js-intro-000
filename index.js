function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function returnArray(array) {
  array = ["four", "five", "six"]
}

function iterate(callback) {
  array = ["one", "two", "three"];
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback);
}
