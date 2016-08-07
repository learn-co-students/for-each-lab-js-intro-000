function iterativeLog(array) {
	array.forEach(function (element, index) {
		console.log(`${index}: ${element}`);
	})
}

function iterate(callback) {
	var arr = [4,5,6];
	arr.forEach(callback);
  return arr;
}

function doToArray(array, callback){
	array.forEach(callback)
}
