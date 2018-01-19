var array = []

function iterativeLog(array) {
array.forEach((element, index, array) => {console.log(`${index}: ${element}`)});
}

function iterate(callback) {
  var array = [1, 2];
  array.forEach(callback);
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}

/*Define a function, doToArray
that accepts an array and a callback.
Call .forEach() on the array,
passing the callback as the forEach callback. */
