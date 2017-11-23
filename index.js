//var iterativeLog = (array) => {
//function iterativeLog(array) {
  //array.forEach(function callback(element,index,array) {console.log(`${index}: ${element}`)})
//}


//or
function iterativeLog(array) {
  array.forEach((element,index,array) => {console.log(`${index}: ${element}`)})
}

function iterate(callback) {
  var array = [5]  //initialize an array
  array.forEach(callback) //passing callback to .forEach() on the array
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
