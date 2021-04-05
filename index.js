var iterativeLog = array =>
  {
    array.forEach((array, i, wholeArray) => {console.log(`${i}: ${array}`)});
  }
var iterate = callback =>
  {
    var myArray = ["cat", "dog", "bird"];
    myArray.forEach(callback);
    return myArray;
  }
var doToArray = (array, callback) =>
  {
    array.forEach(callback);
  }
