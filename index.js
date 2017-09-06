function iterativeLog(array) {

  array.forEach(function(element, index, array) {console.log(`${index}: ${element}`)});
}

function iterate(callback) {
  array = ["Harder", "Better", "Faster", "Stronger"];

  array.forEach(callback);

  return array;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
