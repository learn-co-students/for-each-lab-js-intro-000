
function iterativeLog(array){
array.forEach(printOut)
}

function printOut(item, index, array){
  console.log(`${index}: ${item}`)
}

function iterate(outsider){
  list = ["ben","nick"]
  list.forEach(outsider)
  return list
}

function doToArray(array,callback){
  array.forEach(callback)
}
