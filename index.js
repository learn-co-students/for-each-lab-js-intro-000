function iterativeLog(array){
  array.forEach(function(element, index) {
    console.log(`${index}: ${element}`);
});
}

function iterate(callback){
  var thisArray = ["this","that","those","these"];
  thisArray.forEach(callback);
  return thisArray;
}

function doToArray(array,callback){
  array.forEach(callback);
}
