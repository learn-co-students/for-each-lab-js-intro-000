function iterativeLog(tab){
  tab.forEach((element,index)=> {
    console.log(`${index}: ${element}`);
  });
}


function iterate(callback){
  var numbers=[1, 6, 4, 2, 3, 10];
  numbers.forEach(callback);
  return numbers;
}

function doToArray(array,callback){
  array.forEach(callback);
}
