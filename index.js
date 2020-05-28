function iterativeLog(array) {
  array.forEach((el, i) => {
  console.log(`${i}: ${el}`)
})
}

function iterate(callback){
 const names = ['Adam', 'Barry', 'Charlie']
 names.forEach(callback)
return names
}

function doToArray (array, callback){
  array.forEach(callback)
}
