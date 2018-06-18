function iterativeLog(array) {
  array.forEach(function(element, index, array) {console.log(`${index}: ${element}`)}
  );
}

function iterate(callback) {
  var arr = [0,2,3,4];
  arr.forEach(callback);
  return arr;
}

function doToArray(array,callback) {
  array.forEach(callback);
}