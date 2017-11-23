var animals = ["dog", "fish", "cat"];

function iterativeLog(array) {
	array.forEach((element, index) => {
		console.log(`${index}: ${element}`)
	})
}

iterativeLog(animals);

function iterate(callback) { // Define a function, iterate, that accepts a callback
  var colors = ["blue", "red"]; // initialize an array
  colors.forEach(callback); // Call .forEach() on this array
  return colors;// return the array that you initialized
}

function doToArray(array, callback) {
  array.forEach(callback)
}
