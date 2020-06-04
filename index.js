function iterativeLog(array) {
  array.forEach((element, index) => {console.log(`${index}: ${element}`)})
}


function iterate(callback) {
  array = [2, 4, 6, 1]
  array.forEach(callback)
}

function doToArray(array, callback) {
  array.forEach(callback)
}