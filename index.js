function iterativeLog(array) {
  array.forEach((element, index) => {
    return `${index}: ${element}`;
  })
}
function iterate(callback) {
  var array = [1, 2, 'Boo', false];
  array.forEach(callback);
  return array;
}
function doToArray(array, callback) {
  array.forEach(callback);
}