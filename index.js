function iterativeLog (array) {
  array.forEach((element, index, array) => {
      console.log(`${index}: ${element}`)
    })
}

//###################

function iterate(callback) {
  newArray = ["Mike", "Bob", "Sarah"]
  newArray.forEach(callback)
  return newArray
}

//###################

function doToArray (array, callback) {
  array.forEach(callback);
}
