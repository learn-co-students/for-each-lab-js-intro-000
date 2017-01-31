function iterativeLog (array) {
  array.forEach(function (element, index) {
    console.log(`${index}: ${element}`);
  });
}

function iterate (callback) {
  var anything = ["dog", "literally anything"];
  anything.forEach(callback);
  return anything;
}

function doToArray (array, callback) {
  array.forEach(callback);
}
