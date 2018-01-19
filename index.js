// Define a function, , that accepts an array.
// Call on this array, and inside the callback, log each element with
// the format}: ${element}

function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}


// Define a function, , that accepts a callback. Within
// the function, you should initialize an array. It can contain anything
// you want, but make sure that it is not empty! Call on this array,
// passing the callback to . Then return the array that you initialized.

function iterate(callback) {
  const planets = ["Mercury", "Venus", "Earth","Mars", "Jupiter", "Saturn","Uranus", "Neptune", "Pluto"]

  planets.forEach(callback)

  return planets
}


// Define a function, that accepts an array and a callback.
// Call on the array, passing the callback as
// the callback.

function doToArray(array, callback) {
  array.forEach(callback)
}
