function logStuff(item, index,array){
  console.log(`${index}: ${item}`);
}
function iterativeLog(array){
  array.forEach((item, index, array) =>{
    console.log(`${index}: ${item}`)
  })
}
function iterate(callback){
  let list = [1, 'pidor', 'sosiHer', {'key': 'value'}];
  list.forEach(callback);
  return list;
}
function doToArray(array, callback){
  array.forEach(callback);
}
