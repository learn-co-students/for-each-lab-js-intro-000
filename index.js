function iterativeLog(array){
  array.forEach(function(element, index) {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  var family = ["Caden", "Austin", "Hannah"];

  family.forEach(callback);
  return family;
}

function doToArray(array, callback){
  array.forEach(callback);
}
