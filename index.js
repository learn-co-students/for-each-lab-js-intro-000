
function iterativeLog(array) {
  array.forEach( function (element, index, array) { console.log(`${index}: ${element}`)})
}

function iterate(callback) {
  var names = ['usman','khadija','aaban','aaryan'];
  names.forEach( callback)
  return names;
}

function doToArray(array, callback) {
  array.forEach(callback)
}