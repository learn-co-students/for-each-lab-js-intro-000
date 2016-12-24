/*
Define a function, `iterativeLog()`, that accepts an array. Call `.forEach()`
  on this array, and inside the callback, log each element with the format
  `${index}: ${element}`.
*/

function iterative(array, callback){
  array.forEach(callback)
}