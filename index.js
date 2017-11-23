function iterativeLog(array) {
  //In forEach, element parameter must precede index parametet
  array.forEach( function(element, index) {
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
