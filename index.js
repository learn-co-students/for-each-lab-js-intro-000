var array = [1, 2, 3, 4, 5];

function iterativeLog(array){
  array.forEach(function(e, i) {
    console.log(`${i}: ${e}`);
  })
}


function iterate(cb) {
  var array = ["puppy"];
  array.forEach(cb);
    return array;
}


function doToArray(array, cb){
  array.forEach(cb);
}
