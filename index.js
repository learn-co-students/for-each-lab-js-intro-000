function iterativeLog(array){
  array.forEach((el, idx) => {
  console.log(`${idx}: ${el}`)});
}

function iterate(callback){
  var letters = ["a","b","c"];
  callback(letters);
  return letters
}

function doToArray(array, callback){
  array.forEach(function(element){
    callback(element);
  });
}
