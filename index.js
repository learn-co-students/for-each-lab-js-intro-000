function iterativeLog(array){
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
}

 function iterate(callback){
   var cats = ["Siamese", "Persian", "Bengal", "Siberian"];
 cats.forEach(callback);
 return cats;
 }

 function doToArray(array, callback){
   array.forEach(callback)
 }
