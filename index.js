function iterativeLog(array) {
  array.forEach(function(item, index, array) {console.log(`${index}: ${item}`)})
};

function iterate(callback) {
  var junkFood = ["Doritos", "Cheetos", "Ice Cream"]
  junkFood.forEach(callback)
  return junkFood
};

function doToArray(array, callback) {
  array.forEach(callback)
}
