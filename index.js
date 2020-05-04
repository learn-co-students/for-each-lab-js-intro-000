function callbacklog(element, index){
console.log(`${index}: ${element}`);
}

function iterativeLog(array){
  array.forEach(callbacklog);
}

function iterate(callback){
  var idk = [1, 2, 3];
  idk.forEach(callback);
  return idk
}

function doToArray(array, callback){
  array.forEach(callback);
}
