function iterativeLog(array){

  array.forEach(function(element, index, array){
    console.log(index + ": " + element);
  });
}

function log(var){
  console.log(var * var);
}

function iterate(log) {
  var num = [1, 2, 3];

  num.forEach(log());
}
