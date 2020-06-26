function iterativeLog (array) {
  array.forEach(element, index => console.log(`${index}: ${element}`) )
}

function doToArray (array, callback) {
  
  array.forEach(callback)
}