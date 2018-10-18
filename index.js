function iterativeLog(array){
  array.forEach((element, index, array) => {console.log(`${index}: ${element}`)})
}

function iterate(callback){
  var something = ['cat', 'dog', 'fish']
  
  something.forEach(callback)
  
  return something;
}

function doToArray(array, callback){
  array.forEach(callback);
}