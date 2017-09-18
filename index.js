function iterativeLog(array) {
  array.forEach((array, index) => {
    console.log(`${index}: ${array}`);
  });
}

function iterate(callback) {
  var array = ["fun", "not fun", "why"];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
