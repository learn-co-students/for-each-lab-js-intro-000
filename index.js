//4:03

function iterativeLog(array){

  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
})

}

function iterate(callback){

  var newArray = [1, 2, 3];
  newArray.forEach(callback)
  return newArray;

}

function doToArray(array, callback){

  array.forEach(callback)

}
