function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  }
)
}

function iterate(callback) {
  // create array
  var one = ["red", "orange", "yellow", "green"]
  one.forEach(callback)
  return one
}

function doToArray(array3, callback) {
  array3.forEach(callback)
}
