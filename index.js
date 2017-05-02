
function iterativeLog(array) {
array.forEach((element, index) => {
  console.log(`${index}: ${element}`)
})
}

function iterate(callback) {
 var numbers = [1, 2, 3]
 numbers.forEach(callback)
 return numbers;
}


function doToArray(array, callback) {
  array.forEach(callback)
}
