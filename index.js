function iterativeLog(array) {
  array.forEach((array, index) => {
      console.log(`${index}: ${array}`);
  })
}

function iterate(callback) {
  var array = ["Whatever"];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
