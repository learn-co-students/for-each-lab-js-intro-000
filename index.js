function iterativeLog (array) {
    array.forEach(function(element, index) {
      console.log("WHAT IS ELEMENT", element)
      console.log("WHAT IS INDEX", index)
      console.log(`${index}: ${element}`)
      })
}


function iterate(callback) {
  let dogs = ['nico']
  dogs.forEach(callback)
  return dogs

}

function doToArray(array, callback) {
  array.forEach(callback)
}
