function iterativeLog(array) {
  array.forEach(function(even, index, array) {
    console.log(`${index}: ${even}`);
  });
} 
function iterate(callback) {
  var arr = ['something', 'else'];
  arr.forEach(callback);
  return arr;
} 

function doToArray(array, callback) {
  array.forEach(callback);
}