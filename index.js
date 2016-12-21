function changeCompletely(element, index, array) {
  console.log(`${index}: ${element}`)
}

function iterativeLog(array){
  array.forEach(changeCompletely)
}

function iterate(callback){
  let a = ['pudding']
  a.forEach(callback)
  return a
}

function doToArray(array, callback){
  array.forEach(callback)
}
