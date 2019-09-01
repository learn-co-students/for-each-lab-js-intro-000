var array = ["dog", "cat", "squirrel"];

// function iterativeLog(arr) {
//   arr.forEach((el, i) => {
//     console.log(`${i}: ${el}`)
//   })
// }
// iterativeLog(array);

function iterativeLog(el,i,arr) {
  arr[i] = el +"!!!";
}

function iterate(callback) {
  var cats = ["Garfield", "Bianca", "Petunia"]

  cats.forEach(callback)

  return cats
}

iterate(iterativeLog);     //for iterativeLog(el,i,arr)

function doToArray(arr, callback) {
  arr.forEach(callback);
}

//doToArray(array, ()=> { array.forEach((el, i) => { console.log(`${i}: ${el}`) }) })                 // for iterativeLog(arr) 

doToArray(array,iterativeLog);     //for iterativeLog(el,i,arr)
console.log(array);                //for iterativeLog(el,i,arr)