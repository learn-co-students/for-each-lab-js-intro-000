function iterativeLog( array ) {
  array.forEach(logit);
}

function logit(element, index) {
  console.log( `${index}: ${element}`);
}


function iterate( callback ) {
  var array = ["dog", "cat", "bird", "flea"];
  array.forEach( callback );
  return array;
}


function doToArray( array, callback ) {
  array.forEach( callback );
}
