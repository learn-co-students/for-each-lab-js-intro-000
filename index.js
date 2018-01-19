function iterativeLog(array){
  function callback(element,index,array){
    console.log(`${index}: ${element}`)
  }
  array.forEach(callback)
}
function iterate(callback){
  var array= ['a','b','c']
  array.forEach(callback)
  return array

}
function doToArray(array,callback){
  array.forEach(callback)

}
