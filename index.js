function iterativeLog(array) {
  array.forEach((element,index) =>{
    console.log(`${index}: ${element}`)
  })
  }

  function iterate(callback) {
    var letters = ['a', 'b', 'c']
    letters.forEach(callback)
    return letters
  }

function doToArray(array, callback) {
  array.forEach(callback)
}
