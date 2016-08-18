function iterativeLog(array){
	array.forEach((item, index, array) => 
		console.log(`${index}: ${array[index]}`));
}
iterativeLog([1,2,3]);

function iterate(callback){
	var array =['pizza','steak','mushrooms'];
	array.forEach(callback);
	return array;
}

function doToArray(array,callback){
	array.forEach(callback);
}