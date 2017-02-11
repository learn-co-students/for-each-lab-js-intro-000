function iterativeLog(array){
  array.forEach((element, index, array) =>  {
    console.log( `${index}: ${element}`)
    
  })
  }

function iterate(callback){
  ar = ["1"]
 ar.forEach(callback)
 return ar
 }

 function doToArray(array, callback){
 array.forEach(callback)
 }