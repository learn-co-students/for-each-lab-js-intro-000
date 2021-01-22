function iterativeLog(array){
  array.forEach((element, index, array) =>{
    console.log(`${index}: ${element}`);
  });
}

let letters = ['a','b','c','d']

function iterate(callback){
  letters.forEach(callback)
  return letters
}

function doToArray(array, callback){
  array.forEach(callback)
}
