function iterativeLog(array){
array.forEach(function(element,index,array){
  console.log(`${index}: ${element}`);
});
}
function iterate(callback){
  var cities=['New York','London','Paris','San Fransisco','Chicago'];
  cities.forEach(callback);
  return cities;
}
function doToArray(array,callback){
  array.forEach(callback);
}
