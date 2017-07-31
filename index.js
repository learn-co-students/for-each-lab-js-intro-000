function iterativeLog(arr){
  arr.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  });
}

function iterate(callback){
  var arr = [1,2,3,4,5,6,7,8,9,10]
  arr.forEach(callback)
  return arr
}

function doToArray(arr, callback){
  arr.forEach(callback)
}
