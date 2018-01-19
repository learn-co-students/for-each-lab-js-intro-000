function iterativeLog(array) {
  array.forEach(logFunc)
}
function logFunc(element, index, array) {
  console.log(index+": "+element);
}

function iterate(func) {
  var array = ["A","B","C","D"];
  array.forEach(func);
  return array;
}

function doToArray(array, callback) {

  array.forEach(callback);
  return array;
}
