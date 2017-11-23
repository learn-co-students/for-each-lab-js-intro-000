var array = [ "egg", "tuna", "veg", "cheese tomato"];

function iterativeLog (array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  })
}

iterativeLog(array);

function iterate(callback){
  array.forEach(callback);
  return array;
}


iterate(even => {
  console.log(`${even} is not odd!`)
})


function doToArray(array, callback){
  array.forEach(callback);
}
