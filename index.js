function iterativeLog(array){
  array.forEach((element,index,array)=>{console.log(`${index}: ${element}`)})
}

function iterate(callback) {
  var dogs = ["Yorkie","Silky","German"]
  dogs.forEach(callback)
  return dogs
}

function doToArray(array, callback) {
  array.forEach(callback)
}