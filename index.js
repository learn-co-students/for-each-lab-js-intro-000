function iterativeLog(array){
  array.forEach((element, index) =>{
  console.log(`${index}: ${element}`);
})
}

function iterate(callback){
  const favNums =[8,0,3,1]
  favNums.forEach(callback)
  return favNums;
}
function doToArray(array, callback){
  array.forEach(callback);
}