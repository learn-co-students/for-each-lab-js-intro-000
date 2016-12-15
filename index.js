function iterativeLog(array){
<<<<<<< HEAD
  array.forEach((array, index) => {
      console.log(`${index}: ${array}`)
=======
  array.forEach(a => {
      console.log(`{index}:{element}`)
>>>>>>> 04409ec8f35ba69899d3572fb6ac03d44ec89163
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
