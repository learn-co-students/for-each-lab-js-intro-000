function logelement (element,index,array) {
  console.log(`${index}: ${element}`)
}
function iterativeLog(array) {
   array.forEach(logelement)
      }
   
function iterate(callback) {
      var array=[1,1,1,1,1];
      array.forEach(callback);
      return array
    }

function doToArray (array,callback) {
    array.forEach(callback)
}
    