function iterativeLog(array){
  array.forEach(array)
  console.log(`${index}: ${element}`)
}

function iterate(callback){
  var animals = ["dog", "cat", "squirrel"];
  animals.forEach(element, index)
  return animals  
}

function doToArray(array, callback){
  array.forEach(callback)
}