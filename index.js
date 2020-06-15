function iterativeLog(array){
  array.forEach(el=>{console.log(`${array.indexOf(el)}: ${el}`)})
}

function iterate(callback){
  let array=[23,42];
  array.forEach(callback);
  return array
};

function doToArray(array,callback){
  array.forEach(callback);
}
