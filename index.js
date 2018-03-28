function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  var new_arr = [3, 4, 5, 6];
  new_arr.forEach(callback);
  return new_arr;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
