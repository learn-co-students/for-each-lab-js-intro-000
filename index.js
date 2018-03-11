function iterativeLog(array){
  array.forEach( function (index) {
    //debugger;
    return console.log(`${index-1}: ${array[index-1]}`);
  } );
}

function iterate(callback){
  var array = [1,2,3,4];
  array.forEach(callback);
  return array;
}
function doToArray(array,callback){
  array.forEach(callback);
}
