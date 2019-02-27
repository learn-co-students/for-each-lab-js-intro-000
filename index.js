function iterativeLog(array){
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback){
  var adjectives = ["beautiful", "delicious", "fast", "loud"];

  adjectives.forEach(callback);
  return adjectives;
}

function doToArray(array, callback){
  array.forEach(callback);
}
