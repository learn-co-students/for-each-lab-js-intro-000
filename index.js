function iterativeLog(array) {
  array.forEach( element => {
    console.log(`${array.indexOf(element)}: ${element}`);
  }
  )
};

function iterate(callbackFunction) {
  var array = [1,2,3,4,5,6];
  array.forEach(callbackFunction);
  return array;
};

function callbackFunction () {
  return n * 2;
};

function doToArray(array, callBack) {
  array.forEach(callBack);
};
