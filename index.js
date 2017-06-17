function iterativeLog(array) {
  array.forEach(function callback(a, index, array) {
    console.log(`${index}: ${a}`)
})
}

function iterate(callback) {
  var n = [1,2,3,4,5];
  n.forEach(callback);
  return n;
}


function doToArray(array, callback) {
  array.forEach(callback);
}
