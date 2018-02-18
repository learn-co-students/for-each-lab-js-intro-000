 function iterativeLog(array) {
   array.forEach((element, index, array) => {
     console.log(`${index}: ${element}`);
   });
 }

function iterate(callback) {
  let array = [1,2,3,4,5,6,7,7,1];
  array.forEach(callback);
  return array;
}

function doToArray(a, c) {
  a.forEach(c);
}
