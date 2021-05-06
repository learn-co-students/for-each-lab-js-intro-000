function iterativeLog(array) {
  
  array.forEach ((element, index, array) => { console.log(`${index}: ${element}`)
  
    
  })
}


function iterate(callback) {
  ar = [1,2,3]
  ar.forEach (callback)
  return ar
  
}



function doToArray(array, callback) {
  
   array.forEach (callback)
  return array
    
 
}



function gimmeBack(a) {
  console.log(`${a} ${a+1}`)
  return a+1
}

iterativeLog([1,2,3])

console.log(iterate(gimmeBack() ))