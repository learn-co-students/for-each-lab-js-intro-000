function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  });
}

function iterate(callback) {
  var myArray = ['thing1', 'thing2', 'red fish', 'blue fish'];
  myArray.forEach(callback);
  return myArray;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
