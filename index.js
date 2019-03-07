function iterativeLog(array) {
  array.forEach(log(`${index}: ${element}`))
}

function iterate(callback) {
  var array = ["potatoes",
               "eggs",
               "bacon"]
  array.forEach(callback);
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback)
}
