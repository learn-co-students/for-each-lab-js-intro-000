function iterativeLog(array) {
  array.forEach((element, index, array) => {
  console.log(`${index}: ${element}`)})}

function iterate(toDo) {
  var array = new Array(1, 2, 3, 4);
  array.forEach(toDo);
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
