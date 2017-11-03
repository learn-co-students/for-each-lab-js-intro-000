function iterativeLog(array) {
  array.forEach(function(element, index) {
    console.log(`${index}: ${element}`);
  });
}
function iterate(callback) {
  var funTimes = ["dog", "cat", "mouse"];
  funTimes.forEach(function(){
    callback(funTimes);
    });
  return funTimes;
}
function doToArray(array, callback) {
  array.forEach(function(){
    callback(array);
  });
}
