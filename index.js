function iterativeLog(array){
  array.forEach((element,index)=>{
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  var animals=["cats","dogs","geese"]
  animals.forEach(callback)
  return animals
}

function doToArray(array,callback){
  array.forEach(callback)
}
