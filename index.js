function iterativeLog(array){
  array.forEach((item, index, array) =>{
    console.log(`${index}: ${item}`)
  })
}

function iterate(callback){
  array = [1, 2, 3]
  array.forEach(callback)
  return array
}

function doToArray(array, callback){
  array.forEach(callback)
}
