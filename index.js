//Define a function, iterativeLog(),
//that accepts an array.
function iterativeLog(array1){
//Call .forEach() on this array
  array1.forEach((element, index) => {
//inside the callback,
//log each element with the format
//${index}: ${element}.
  console.log(`${index}: ${element}`)
  })
}

//Define a function, iterate,
//that accepts a callback.
function iterate(callback1){
//Within the iterate() function,
//you should initialize an array
//it can contain anything you want.
var array3 = [4, 5, 6];
//Call .forEach() on this array,
//passing the callback to .forEach()
   array3.forEach(callback1);
//Then return the array that
//you initialized.
  return array3;
}

//Define a function, doToArray
//that accepts an array and a callback.
function doToArray(array4, callback2){
//Call .forEach() on the array,
//passing the callback as the forEach callback.
   array4.forEach(callback2)
 }
