function iterativeLog(array){
 var newarray = [];
 for(var i = 0; i<array.length; i++){
   newarray.push(i+": "+array[i]);
    console.log(newarray[i]);   
    //console.warn(newarray[i]);
 };
  
  
};



function iterate(callback){
 
   var newarray = [ "Cat", "Dog", "Cow"];
   newarray.forEach(callback);
   //console.log(newarray);
   return newarray;

  
};


function doToArray(array, callback){

 array.forEach(callback);
 return array;
  
};