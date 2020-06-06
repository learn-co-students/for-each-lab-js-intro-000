function iterativeLog(array){
  array.forEach(element => console.log(`${index}: ${element}`))
}

function iterate(callback){
  let arr = [1, 2, 3]
  arr.forEach(callback)
  return arr
}

function doToArray(array, callback){
  array.forEach(callback)
}

console.log(iterativeLog([1,2,3]))
console.log(iterate(iterativeLog))
