function iterativeLog(array, callback){
  array.forEach(callback);
}

function iterate(element, index, array){
  array[index] = Math.floor(Math.random() * 10 +5).toString() + `${array[index]}: ${element} .`
}

function doToArray(array, callback){
  array.forEach(callback)
}
