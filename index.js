function iterativeLog(array) {
  array.forEach(function(element, index) {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  var kids = ["Maggie", "Piper"];
  kids.forEach(callback);
  return kids;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
