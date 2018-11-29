function iterativeLog(array) {
  array.forEach((log, index, array) => {
    console.log(`${index}: ${log}`);
  });
}

function iterate(callback) {
  var array = ["x", "y", "z"];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
