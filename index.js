

function iterativeLog(arr) {
  arr.forEach((x, i) => { console.log(`${i}: ${x}`); });
}

function iterate(callback) {
  var arr = [];
  callback(arr);

  return arr;
}

function doToArray(arr, callback) {
  arr.forEach(callback);
}
