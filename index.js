//Define a function, iterativeLog(), that accepts an array.

function iterativeLog(array) {
    //Call .forEach() on this array,
    array.forEach((element, index) => {
      //and inside the callback, log each element with the format ${index}: ${element}.
      console.log(`${index}: ${element}`);
    }
    );
}

//Define a function, iterate, that accepts a callback.
function iterate(callback){
    //Within the iterate() function, you should initialize an array.
    const myArray = ["Ruby", "Sinatra", "Rails", "Javascript", "React"];
    //Call .forEach() on this array, passing the callback to .forEach(). 
    myArray.forEach(callback);
    //Then return the array that you initialized.
    return myArray;
}

//Define a function, doToArray that accepts an array and a callback. 
function doToArray(array, callback){
    //Call .forEach() on the array, passing the callback as the forEach callback.
    array.forEach(callback);
}