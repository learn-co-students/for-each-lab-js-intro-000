function iterativeLog(callback) {
  callback.forEach((element, index) =>{
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  var arr = [42, 73, 63];
  arr.forEach(callback);
  return arr;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
