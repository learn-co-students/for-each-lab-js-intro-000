function iterativeLog(array){
  array.forEach(function(element, index){
    console.log (`${index}: ${element}`)
  })
  return iterativeLog
}




function iterate(callback){

let array = [1, 2, 3]
 array.forEach(callback)
 return array 
 }


function doToArray(array, callback){
  array.forEach(callback)
}
