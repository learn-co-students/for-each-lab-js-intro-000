function iterativeLog(array){
  var index = 0
  array.forEach(item => {
    console.log(`${index}: ${array[index]}`)
    index++
  })
}

function iterate(callback){
  var numbers = [1, 5, 9, 30]
  numbers.forEach(callback)
  return numbers
}

function doToArray(array, callback){
  array.forEach(callback)
}
