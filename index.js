function iterativeLog(array){
  array.forEach((el, idx) => {
  console.log(`${idx}: ${el}`)});
}

function iterate(callback){
  var letters = ["a", "b", "c"];
  letters.forEach(callback()){
  }
  return letters
}
