/*function iterativeLog(array) {
   array.forEach((element, index) => {
     console.log(`${index}: ${element}`)
   })
 }
*/
//QUE ES LO MISMO QUE:
function iterativeLog(array){
  array.forEach(
    function (element, index){
      console.log(`${index}: ${element}`)
    }
  )
};


function iterate(callback){
  var wanted=["pizza", "milkshake", "gum"];
  wanted.forEach(callback);
  return wanted;
}

function doToArray(array, callback){
  array.forEach(callback);
}
