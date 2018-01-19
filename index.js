function iterativeLog(Array){
  Array.forEach(logIt)
}
function logIt(element,index){
  console.log(`${index}: ${element}`)
}

function myCallBack(element){
  var y = []
  y.push(element)
}
function iterate(myCallBack){
  var x = [1,2,3,4,5]
  x.forEach(myCallBack)
  return x
}

function doToArray(x,callback){
  x.forEach(callback)
}
