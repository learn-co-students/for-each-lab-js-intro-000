function iterativeLog(array) {
  array.forEach(function(element, index) {
    console.log(`${index}:${element}`)
  })
};
function iterate(callback) {
  var anArray = ["Du", "Duh", "Duhn"];
  var john = ['']
  anArray.forEach(callback(element, index){
    john[index] = element
  })
  return john
};
function doToArray(array, callback) {
  array.forEach(callback())
};
