function iterativeLog(array){ 
  array.forEach(function(element, index){
   console.log(`${index}: ${element}`);
  });
}
iterativeLog([1, 2, 3]);

function iterate(callback){
  var chars = ['a', 'b', 'c'];
  chars.forEach(callback);
  return chars;
}

function doToArray(array, callback){
  array.forEach(callback);
}