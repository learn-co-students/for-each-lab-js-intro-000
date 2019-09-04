///
function iterativeLog(array) {
	array.forEach((element, index) => {
		console.log(`${index}: ${element}`)
	})
}

function iterate(callback) {
	var newArray = ['item 4', 'item 5', 'item 6']
	callback(newArray)
	return newArray
}

function doToArray (array, callback) {
	callback(array)
}
