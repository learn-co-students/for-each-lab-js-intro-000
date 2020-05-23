function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`));
  }
}

function iterate(callback) {
  var num = [9, 88, 101, 6, 55];
  num.forEach(callback);
  return (num);
}

function doToArray(array, callback) {
  array.forEach(callback);
}
