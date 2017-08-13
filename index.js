
//test 1: index iterativeLog(array) logs each element with the format `${index}: ${element}`:
function iterativeLog(array){
  array.forEach((element,index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  var new_array = ["Waffles","Pancakes"];
  new_array.forEach(callback);
  return new_array;
}
function doToArray(array,callback){
  array.forEach(callback);
}
