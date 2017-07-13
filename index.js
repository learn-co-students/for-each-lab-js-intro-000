function iterativeLog(array){
  array.forEach((arrayElement, arrayIndex, arrayItself) => {
    console.log(`${arrayIndex}: ${arrayElement}`)
  })
}

function iterate(callback){
  const arr = [1, 2, 3]
  arr.forEach(callback)
  return arr
}

function doToArray(array, callBack){
array.forEach(callBack)
}
