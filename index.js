function iterativeLog(array){
  array.forEach(function(element){
    console.log(`${array.indexOf(element)}: ${element}`);
  })
}

function iterate(callback){
  arr=new Array()
  arr=[1,2,3,4,5,6]
  arr.forEach(callback)
  return arr
}

function doToArray(array, callback){
  array.forEach(callback)
}
