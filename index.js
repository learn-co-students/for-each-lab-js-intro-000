function iterativeLog(array) {
  array.forEach((element, index, array) =>{
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  array1 = [1,2,3];
  array1.forEach(callback());
  return array1
}

function doToArray(array, callback){
  array.forEach(callback());
}
