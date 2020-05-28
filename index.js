

function iterativeLog(array) {

    // for (var index = 0; index < array.length; index++) {
    //     var element = array[index]
    //     console.log(`${index}: ${element}`);
    // }

        array.forEach((element, index, array) => {
            console.log(`${index}: ${element}`);
        });

}


function iterate(callback) {

    var crooner = ["A", "Blossom", "Fell", "by", "Nat", "King", "Cole"];
    crooner.forEach(callback);
    return crooner;

}


function doToArray(array, callback) {
    array.forEach(callback);
}



// mocha.run()
// doToArray(iterate, iterativeLog)

