function iterativeLog(array) {
	// body...
	array.forEach((element, index, array) => {
	 //body...
     console.log(`${index}: ${element}`);
     })
};

function iterate(callback) {
	// body...
	names = ["Jim", "Dor", "Monik"];
    names.forEach(callback);
    return names;
};
function doToArray(array, callback) {
	// body...
    array.forEach(callback);
};