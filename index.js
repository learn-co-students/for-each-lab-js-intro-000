function iterativeLog(array){
  array.forEach((elem, ind, arr)=>{
    console.log(`${ind}: ${elem}`);
  });
}

function iterate(callback){
  var colorsArray = ['blue', 'green', 'white', 'black'];
  colorsArray.forEach(callback);
  return colorsArray;
}

function doToArray(array, callback){
  array.forEach(callback);
}
