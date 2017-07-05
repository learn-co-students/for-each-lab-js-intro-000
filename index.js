function iterativeLog(array) {
  array.forEach(function(element, index) {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var family = ["Danny", "Laura", "Lauren", "Marvin", "George"];
  family.forEach(callback);
  return family;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
