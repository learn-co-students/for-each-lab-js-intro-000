function iterativeLog(array){
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback){
  var stuff = ['stuff', 'things'];
  stuff.forEach(callback);
  return stuff;
}

function doToArray(array, callback){
  array.forEach(callback);
}
