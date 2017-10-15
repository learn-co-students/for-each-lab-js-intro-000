
function iterativeLog(array){
array.forEach(function(element, index){
  console.log(`${index}: ${element}`);
  })
}

function iterate(callback){
  var test = [1, 2];
  test.forEach(callback);
  return test;
}

function doToArray(array, callback){
  array.forEach(callback);
}
