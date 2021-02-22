
function iterativeLog(array) {
     array.forEach((element, index) => {
    	console.log(`${index}: ${element}`);
    })
}

function iterate(myFunction) {
	let array = [0]
	array.forEach(myFunction) 
	return array 
}

function doToArray(array, myFunction) {
    array.forEach(myFunction)
}