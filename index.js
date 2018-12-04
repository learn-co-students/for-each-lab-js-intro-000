function iterativeLog(arr){
  arr.forEach((element, index) => {console.log(`${index}: ${element}`)})
}

function iterate(callback){
  arr = ["MJ", "LBJ", "Magic", "Bird", "Shaq", "Kobe", "Curry", "Timmy"]
  arr.forEach(callback)
  return arr
}

function doToArray(arr, callback){
  arr.forEach(callback)
}
