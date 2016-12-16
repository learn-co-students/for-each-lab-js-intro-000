function iterativeLog(array){
  array.forEach(index => {console.log(`${index-1}: ${array[index-1]}`)})
}

function iterate(callback){
  theArray = [1,2,3];
  theArray.forEach(callback);
  return theArray;
}

function doToArray(array, callback){
  array.forEach(callback)
}
