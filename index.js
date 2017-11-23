function iterativeLog(array_in) {
  array_in.forEach((element, index,array_in)=>{
    console.log(`${index}: ${element}`);
})
}
function iterate(callBack){
  array = ['fakh']
  array.forEach(callBack)
  return array
}

function doToArray(array_in,callBack){
  array_in.forEach(callBack)
}