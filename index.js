function iterativeLog(array) {
  array.forEach ((word, index) => {
    console.log(`${index}: ${word}`);
  })
}

function iterate(callback) {
  var testArray = ["Saving", "the", "world", "one", "woman", "at", "a", "time"];
  iterativeLog(testArray);
  testArray.forEach((word, index) => {
    callback();
  })
  return testArray;
}

function doToArray(array, callback) {
  array.forEach((word, index) => {
    callback();
  })
}
