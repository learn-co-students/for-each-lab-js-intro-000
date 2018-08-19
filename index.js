function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}
function iterate(callback){
   var arr = ['dog']
   arr.forEach((arr) => {
    return  callback(arr);
   })
   return arr
 }

function doToArray(array, callback) {
   array.forEach((callback))
   ;
   return array
 };

// - Define a function, `iterate`, that accepts a callback. Within the `iterate()` function, you should initialize an array. It can contain anything you want, but make sure that it is not empty! Call `.forEach()` on this array, passing the callback to `.forEach()`. Then return the array that you initialized.
// - Define a function, `doToArray` that accepts an array and a callback. Call `.forEach()` on the array, passing the callback as the `forEach` callback.
