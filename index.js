
function iterativeLog(array) {
  array.forEach(function(element){
    console.log(`${array.indexOf(element)}: ${element}`);
  });
};


function iterate(callback) {
  var array = [1, 2, 3, 4];
  array.forEach(function(element){
    callback(element);
    })
    return array
};

function doToArray(array, callback) {
  array.forEach(function(element) {
    callback(element)
  });
};
