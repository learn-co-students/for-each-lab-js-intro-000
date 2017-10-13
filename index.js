function iterativeLog(array){
  array.forEach(log = (element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}
function iterate (callback) {
  var candy = ['chocolate', 'gummy bears']
  candy.forEach(callback)
  return candy
}

function doToArray(array, callback) {
  array.forEach(callback)
}
