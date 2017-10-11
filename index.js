function iterativeLog(array) {
  array.forEach((element,index)=>{
    console.log(`${index}: ${element}`);
  });
};

function iterate(callback) {
  var array = ["pink","gold","baby blue"];
  array.forEach(callback);
  return array;
};

function doToArray(array, callback) {
  array.forEach(callback);
};
