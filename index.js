function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var catArray = ["tabby", "ginger", "tuxedo"];
  catArray.forEach(callback);
  return catArray;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
