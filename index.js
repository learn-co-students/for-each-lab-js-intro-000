
var array = []
function iterativeLog(array) {
 array.forEach(function(element, index, array){
 	console.log(`${index}: ${element}`) })
}

let labArray = ['joe', 'julius', 'roseanne', 'hana', 'jonathan']
  function iterate(callback) {
    labArray.forEach(callback); 
      return labArray
}

function doToArray(array, callback) {
  array.forEach(callback); {
    return array
  }
}

