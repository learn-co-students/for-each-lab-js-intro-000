function iterativeLog(array){
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(call){
  myArray = ["1", 1, "2", 2, "3", 3];
  myArray.forEach(call);
  return myArray;
}

function doToArray(array, callBack){
  array.forEach(callBack)
}
