function iterativeLog(array){
  array.forEach((element, index) =>{
    console.log(`${index}: ${element}`)
  })
}

function iterate(callbackFn){
  var myarray = ['blue','green'];
  myarray.forEach(callbackFn)
  return myarray
}
function doToArray(array, callbackFn){
  array.forEach(callbackFn)
}
