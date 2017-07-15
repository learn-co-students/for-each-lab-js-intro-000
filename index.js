function iterativeLog(array) {
    array.forEach((element, index) => {
        console.log(`${index}: ${element}`)
    });
}

function iterate(callback) {
    var dead_songs = ["Althea", "Scarlet Begonias", "Sing Me Back Home"];
    dead_songs.forEach(callback);
    return dead_songs;
}

function doToArray(array, callback) {
    array.forEach(callback);
}
