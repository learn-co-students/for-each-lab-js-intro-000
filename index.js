function iterativeLog(array) {
  array.forEach(function(element, index, array){
    console.log(`${[index]}: ${array[index]}`);
  });
}

function iterate(callback) {
  var array = ["This", "That"];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
