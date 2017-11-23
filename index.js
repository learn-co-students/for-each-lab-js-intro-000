function iterativeLog(array){
  array.forEach((element, index) => {
    console.log(index + ": " + element);
  })
  return array;
}

function iterate(callback){
  var arr = ["hi", "bye", "wenis", "moose"];
  arr.forEach(callback);
  return arr;
}

function doToArray(array, callback){
  array.forEach(callback);
  return array;
}
