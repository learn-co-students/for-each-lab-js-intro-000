function iterativeLog (array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}


function iterate (callback) {
var bears = ["black", "brown", "polar"];
bears.forEach(callback);
return bears;
}

function doToArray (array, callback) {
  array.forEach (callback);
}
