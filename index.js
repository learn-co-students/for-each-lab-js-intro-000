function iterativeLog(array){
  array.forEach(function(ele, i){
    var ele = array[i];
    console.log(i + ": " + ele)
  });
}

function iterate(cb){
  var myArr = [1,2,3];

  myArr.forEach(function(ele, i){
    cb(ele, i);
  });
  return myArr;
}

function doToArray(array, cb){
  array.forEach(function(ele, i){
    cb();
  });
}
