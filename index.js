function iterativeLog(array) {
  array.forEach(function(element, index) {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  var newArray = ['beep', 'boop', 'biz'];
  newArray.forEach(callback);
  return newArray;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
