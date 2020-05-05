
//var num =[1,2,3];
//var i=0;
//var element;
/*num.forEach(function(array,callback){
  console.log(array, callback)
})*/


/*Define a function, `iterativeLog()`, that accepts an array. Call `.forEach()` on this array, and inside the callback, log each element with the format `${index}: ${element}`.*/


function iterativeLog(array){
  array.forEach(function(el,i){
    console.log(`${i}: ${el}`)
  });
}

/*Define a function, iterate, that accepts a callback. Within the iterate() function, you should initialize an array. It can contain anything you want, but make sure that it is not empty! Call .forEach() on this array, passing the callback to .forEach(). Then return the array that you initialized.*/

function iterate(callback){
 const numarr =[1,2,3];
 numarr.forEach(callback);
 return numarr;
}
/*Define a function, doToArray that accepts an array and a callback. Call .forEach() on the array, passing the callback as the forEach callback.*/
function doToArray(array, callback){
  array.forEach(callback);
}






/*
  var num =[1,2,3];
var index;
var element;


const iterate = (callback) => {

  array.forEach(callback);
   return array;
}

const doToArray = (array, callback) =>  {
  array.forEach(callback);
}

const iterativeLog = (array) => array.forEach(`${index}: ${element}`);*/
