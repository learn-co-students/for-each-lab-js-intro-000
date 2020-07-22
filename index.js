function iterativeLog(arr){
  arr.forEach((elem,ind) => {console.log(`${ind}: ${elem}`)})
}
function iterate(callback){
  arr=["new Array()"]
  arr.forEach(callback)
  return arr
}
function doToArray(arr,callback){
  arr.forEach(callback)
}
