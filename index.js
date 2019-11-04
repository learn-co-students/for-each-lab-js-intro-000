// taking notes to ensure understanding of code

// define function - accepts array
function iterativeLog(array){
  // call forEach on array 
  array.forEach((element, index) => {
    // inside the callback log
    console.log(`${index}: ${element}`);
  });
}

// define function accepts callback
function iterate(callback){
  // initialize an array - anything
  var dogs = ["Sambo", "Sassy", "Sammy", "King", "Duke"];
  // call forEach on the array and pass a callback to forEach
  dogs.forEach(callback);
  // then return the array
  return dogs;
}


// define function accepts array and callback
function doToArray(array, callback) {
  // call forEach on the array
  // pass the callback as the forEach callback
  array.forEach(callback);
}


