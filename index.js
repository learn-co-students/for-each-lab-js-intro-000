function iterativeLog(array){
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback){
  var dogs = ["Sheeba", "Durban", "Logan"];
  dogs.forEach(callback);
  return dogs;
}

function doToArray(array, callback){
  array.forEach(callback);
}
