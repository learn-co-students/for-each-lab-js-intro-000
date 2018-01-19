function iterativeLog(array){
  array.forEach(e =>{
    console.log(`${array.indexOf(e)}: ${e}`)
  })
}

function iterate(callback){
  var a = [1]
  a.forEach(callback)
  return a
}

function doToArray(array, callback){
  array.forEach(callback)
}
