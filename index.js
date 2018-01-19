function iterativeLog(array) {
  array.forEach((element, index)=>{
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  const numbers = [1, 2, 3, 4]
  numbers.forEach(callback)
  return numbers
}

function doToArray (array, callback) {
  array.forEach(callback)
}
