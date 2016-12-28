function iterativeLog(array) {
  array.forEach(function(ele, idx) {console.log(idx + ": " + ele);});
}

function iterate(cb) {
  var ar = [1, 2, 3];

  ar.forEach(cb);
  return ar;
}

function doToArray(array, cb) {
  array.forEach(cb);
}
