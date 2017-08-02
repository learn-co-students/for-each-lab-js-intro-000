function iterativeLog(array){
  array.forEach( (element, index, array) => { console.log(`${index}: ${element}`) } );
}

function iterate(callback) {
  var myArray = [1, 2, 3, 4, 5, 6];
  myArray.forEach(callback);
  return(myArray);
}

function doToArray(array,callback){
  array.forEach(callback);
}


/*
- Define a function, `iterativeLog()`, that accepts an array. Call `.forEach()` on this array, and inside the
callback, log each element with the format `${index}: ${element}`.
- Define a function, `iterate`, that accepts a callback. Within the `iterate()` function, you should initialize
an array. It can contain anything you want, but make sure that it is not empty! Call `.forEach()` on this array,
passing the callback to `.forEach()`. Then return the array that you initialized.
- Define a function, `doToArray` that accepts an array and a callback. Call `.forEach()` on the array, passing
the callback as the `forEach` callback.
*/
