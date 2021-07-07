// Define a function, iterativeLog(), that accepts an array.
// Call .forEach() on this array, and inside the callback, log each element with
// the format ${index}: ${element}.
function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

// Define iterate() function, iterate, that accepts a callback.
// Initialize an array with anything. Array can not be empty!
// Call .forEach() on array, passing the callback to .forEach().
// Then return the array that you initialized.
function iterate(callback) {
  var array = new Array()
  array = ["The", "Array", "Can Not", "Be", "Empty!!!"]
  return array
}

// Define a function, doToArray that accepts an array and a callback.
// Call .forEach() on the array, passing the callback as the forEach callback.
function doToArray(array, callback) {
  array.forEach(callback)
}
