function iterativeLog(array) {
  array.forEach((element, index) => {             // why does order of "element" and "index" as arguments matter?
    console.log(`${index}: ${element}`)           // code did not work until I switched the two
})
}

function iterate(callback){
  var array = ["not", "empty"];
array.forEach(callback);
return array
}

function doToArray(array, callback){
array.forEach(callback)
}
