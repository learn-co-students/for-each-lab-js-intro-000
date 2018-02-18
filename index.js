function iterativeLog(array) {
  array.forEach((element, i) => {
    console.log(`${i}: ${element}`)
  } );
}

function iterate(callback) {
  var array = ["Joe", "Jenny", "Joseph"];
  callback(array);
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
