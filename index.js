function iterativeLog(array){
  //.forEach needs this order in the parameter. this way, it knows what each parameter is.
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback){
  const myArray = ["Rick", "Cai-Jhen"];
  myArray.forEach(callback);
  return myArray;
}

function doToArray(array, callback){
  array.forEach(callback);

}
