function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}` )
  })
}
function iterate(callback) {
  var target = [1,2,3]
  target.forEach(callback)
 return target
}

function doToArray(array, callback){
array.forEach(callback)

}
