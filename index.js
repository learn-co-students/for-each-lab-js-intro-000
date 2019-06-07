function iterativeLog(array) { // takes element first as that is not optional
  array.forEach(function (element, index) {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  var array = ["Mio", "Orlando", "Samir"];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback);
  return array;
}
