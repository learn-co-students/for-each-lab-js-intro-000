// HAVICK WAS HERE ~~~~

function iterativeLog(array) {
  array.forEach((el, i) => {
    console.log(`${i}: ${el}`)
  })
}

function iterate(callback){
	const beer = ['bud', 'coors', 'others'];

	beer.forEach(callback);

	return beer;
}

function doToArray(array, callback){
	array.forEach(callback);
}