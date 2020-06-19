function iterativeLog(array){

  array.forEach(function(element, index){
                // callback function
                //automatically ran inside any function
    console.log(`${index}: ${element}`)

  })
}


function iterate(callback){

const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

array.forEach(callback)

return array
}


function doToArray(array, callback){
  array.forEach(callback)
}



// var evens = [0, 2, 4, 6, 8, 10];
//
// evens.forEach((even, index, array) => {
//   debugger;
//   console.log(`${even} is not odd!`);
// });
