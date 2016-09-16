function iterativeLog(array){
  //[2, 5, , 9].forEach(logArrayElements);
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var array= [1,2]
  array.forEach(callback)
  return array

}

function doToArray(array, callback){
  array.forEach(callback)
}
