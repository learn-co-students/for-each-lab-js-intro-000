function iterativeLog(array) {
    array.forEach((el, i) => {
      console.log(`${i}: ${el}`)
        })
 }
//

function iterate(callback) {
 const arr = [1,2,3,4]
 arr.forEach(callback)
   return arr
}

function doToArray(array, callback) {
  array.forEach(callback)
}
