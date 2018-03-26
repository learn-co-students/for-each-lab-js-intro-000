function iterativeLog (array) {
    //array.forEach(console.log(`${index}: ${element}`));
    array.forEach(function(element) {
    console.log(`${element-1}: ${element}`);
  });
}

function iterate (callback) {
  var array = ["Not Empty"];
  array.forEach(callback);
  return array;
}

function doToArray (array, callback) {
  array.forEach(callback);
}
