function iterativeLog(array) {
array.forEach((element, index) => {
console.log(`${index}: ${element}`)
})
}


function iterate(callback) {
  var whatEver = ["Pedro","Juan","Diego"];
  whatEver.forEach(callback);
  return whatEver;
  }

function doToArray(array, callback){
    array.forEach(callback);
  }
