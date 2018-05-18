function iterativeLog(array){
   array.forEach((element, index) =>{
     debugger;
     console.log(`${index}: ${element}`)})
 }

function iterate(callback){
  var array = [6, 7, 8];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback){
  array.forEach(callback)
}
