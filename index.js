
function iterativeLog(array) {
  array.forEach(function(index, element){
    console.log(`${element}: ${index}`);
  });
}

function iterate(callback){
  var greeting = ['hola', 'bonjour', 'bom dia']
  greeting.forEach(callback);
  return greeting
}

function doToArray(array, callback){
  array.forEach(callback)
}
