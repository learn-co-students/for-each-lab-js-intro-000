function iterativeLog(array){
  array.forEach((element, index, array) => {
      console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  const arr = ['apple', 'grape', 'orange'];

  arr.forEach(callback)
  return arr
}

function doToArray(array, callback){
  array.forEach(callback)
}
