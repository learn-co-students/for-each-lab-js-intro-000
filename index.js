
function iterativeLog(array){
  array.forEach((element, index)=>{
  console.log(`${index}: ${element}`)
})
}

function iterate(callBack){
  var array = [`Ayla`, `Aryeh`, `Chewie`, `Jack`];
  array.forEach(callBack);
  return array;
}
function doToArray(array, callBack){
  array.forEach(callBack);
}
