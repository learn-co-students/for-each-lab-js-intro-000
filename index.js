function iterativeLog(array){
  array.forEach(item =>{
    console.log(`${array.indexOf(item)}: ${item}`)
  })
}
function iterate(callback){
  var newarray = [6,1,4]
  newarray.forEach(callback)
  return newarray
}
function doToArray(array,callback){
  array.forEach(callback)
}
