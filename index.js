
function iterativeLog(array) {
  array.forEach(function(element) {
      console.log(`${array.indexOf(element)}: ${element}`);
  });
}


function iterate(callback) {
  var internal = [1,2,3,4,5,6,7];
  callback(internal);
  return internal;
}

function doToArray(array, callback) {
  array.forEach(element => {
callback(element);
});
}
