/*function iterativeLog(array) {
 array.forEach(`${index}: ${element}`);
}
return iterativeLog();
*/
function iterativeLog(array) {
 array.forEach((element,index)=> console.log(`${index}: ${element}`));
}
iterativeLog([1,2,3,4,5]);

/*
function iterate(callback, array= [1,2,3,4,5]) {
  array.forEach(callback);

return array; 
} */

function iterate(callback) {
  array = [1,2,3];
  array.forEach(callback);
  
  return array;
}


function doToArray(array, callback) {
  array = [1,2,3];
  array.forEach((callback));
  
}






/*
function iterate(callback, [array]) {
  array.forEach((callback) => [array]);
return array(callback);
}
*/
