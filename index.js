function iterativeLog(array) {
  array.forEach(callback)
}

function callback(v, i) {
var index = i
var element = v
console.log(`${index}: ${element}`)
}

/* Define a function, `iterate`, that accepts a callback. Within the `iterate()`
  function, you should initialize an array — it can contain anything you want.
  Call `.forEach()` on this array, passing the callback to `.forEach()`. Then
  return the array that you initialized.*/
  function iterate(cb) {
    var ar =[1]
    ar.forEach(cb)
    return ar
  }

  function cb() {
  }

/*Define a function, `doToArray` that accepts an array and a callback. Call
  `.forEach()` on the array, passing the callback as the `forEach` callback.*/
  function doToArray(arr, call) {
    arr.forEach(call)
  }
  function call() {
  }
