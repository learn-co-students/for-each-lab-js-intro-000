function iterativeLog(array1){
  array1.forEach((element,index,array) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callBack){
  var array2 = [33333333,121212,'2323232'];
  array2.forEach(callBack);
  return array2;
}

function doToArray(array,callBack){
  array.forEach(callBack);
}
