  function iterativeLog(array) {
    array.forEach(function(element, index, array) {
      console.log(`${index}: ${element}`);
    })
  }

  function iterate(callback) {
    var pets = ["cat", "dog", "lizard"];
    pets.forEach(callback);
    return pets

  }

  function doToArray(array, callback) {
    array.forEach(callback);

  }
