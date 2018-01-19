function iterativeLog(array) {
  array.forEach((element, index, array) =>{
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var array = ['apple','orange','fruit'];
  array.forEach(callback);
  return(array)
}

function doToArray(array, callback) {
  array.forEach(callback);
  
}
