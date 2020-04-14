function iterativeLog(array) {
  array.forEach((element,index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(someFunction) {
  var tempArray = [7,8,9]
  tempArray.forEach(someFunction)
  return tempArray
}

function doToArray(array, anyFunction) {
  array.forEach(anyFunction)
}
