function iterativeLog(array){
  array.forEach(function(element, index){
    console.log(`${index}: ${element}`);
  })
}

function iterate(callbacks) {
  let names = ['abdulqadir','attau','bashir','sanusi'];
  callbacks(names)
  return names;
}

function doToArray(array, callback){
  array.forEach(callback)
}
