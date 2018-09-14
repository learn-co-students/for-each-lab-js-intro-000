function iterativeLog(array) {

//call .foreach() on this array

//inside the callback, log each element with the format $ ...
	array.forEach(function(element, index) {console.log(`${index}: ${element}`)}
	)
}

function iterate(callback) {

//initialize an array - not empty
var newArray = ["bob"];

//call .forEach - passing the callback .forEach()
newArray.forEach(function() {callback()});

//return the array that you initialized
return newArray

}

function doToArray(array, callback){
  array.forEach(function(){callback()})
}
