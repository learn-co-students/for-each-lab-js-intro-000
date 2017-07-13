

function iterativeLog(array){
  array.forEach(item =>{
    console.log(`${array.indexOf(item)}: ${item}`)
  })

}

function iterate(callback){
  var myArray = [2,4,8,16,32,64]
  myArray.forEach(callback)
  return myArray
}

function doToArray(array,callback){
  array.forEach(callback)
  return array
}
