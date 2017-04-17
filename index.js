function iterativeLog(array) {
  array.forEach((aString, index, array) =>  {console.log(`${index}: ${aString}`) } )
}

function iterate(callback) {
  var array = ["Spice", "Wolf"];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback);
}