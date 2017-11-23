function iterativeLog(arr) {
  arr.forEach(function(item,index) {console.log(index + ": " + item)});

}

function iterate(call) {
  var newArr = [1,2,3,4];
  newArr.forEach(call);
  return newArr;
}

function doToArray(arr, cb) {
  arr.forEach(cb);
}
