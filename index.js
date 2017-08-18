function iterativeLog(arr) {
  arr.forEach(function(ele, ind) {
    console.log(`${ind}: ${ele}`);
  });
}

function iterate(cb) {
  var arr = [1, 2, 3, 4];
  arr.forEach(cb);
  return arr;
}

function doToArray(arr, cb) {
  arr.forEach(cb);
}
