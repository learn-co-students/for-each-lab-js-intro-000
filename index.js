function iterativeLog(array){
  array.forEach((array, index) => {
      console.log(`${index}: ${array}`)
  })
}
function iterate(callback){// create a function with a parameter callback
  var array=[1,2,3]// create a new array with var with a value
  array.forEach(callback)// using .forEach go over the array and pass it to the parameter  
  return array// and return the array
}
function doToArray(array, callback){// create a function with 2 parameters
  array.forEach(callback)//using .forEach go over the array and pass the values to the callback
}