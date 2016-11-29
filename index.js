function iterativeLog(array) {
    var index = 0;
    array.forEach(data => {
        console.log(`${index}: ${data}`);
        index++;
    })
}

function iterate(callback) {
    var animals = ["dog", "fish", "cat"];
    animals.forEach(callback);
    return animals;
}

function doToArray(array, callback) {
    array.forEach(callback);
    return array;
}
