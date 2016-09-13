function iterativeLog(arr) {
  arr.forEach((element, index) => {
    console.log(index + ": "+ element);
  });
}

function iterate(callback) {
  var arr = ["a", "b", "c"];
  arr.forEach(callback);
  return arr;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
