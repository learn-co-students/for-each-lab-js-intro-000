function iterativeLog(array){
  array.forEach((element, index, array)=>
    {console.log(`${index}: ${element}`)})
}


function iterate(callback){
  var myArr=['i','d','g','a','f']
  myArr.forEach(callback)
  return myArr
}

function doToArray(array, callback){
  array.forEach(callback)
}
