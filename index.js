
function iterativeLog(array){
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  var numArray = [1, 2, 3, 4]
  numArray.forEach(callback)
  return numArray
}

function doToArray(array, callback){
  array.forEach(callback)
}