function iterativeLog(array) {
  array.forEach( function(index, element) {
      console.log(`${index}: ${element}`)
  });
};

function iterate(callback) {
  var newArray = [
    {something: 1},
    {anything: 2}
  ];
  newArray.forEach(callback);
  return newArray;
};

function doToArray(array, callback){
  array.forEach(callback);
};