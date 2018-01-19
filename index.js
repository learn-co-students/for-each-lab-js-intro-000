function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  });
}
//I guess I was close before....
function iterate(callback) {
  var array = ["cows", "racoons", "dogs"];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback);
}

/* describe('index', function() {
  describe('iterativeLog(array)', function() {
    it('logs each element with the format `${index}: ${element}`', function() {
      const log = expect.spyOn(console, 'log').andCallThrough()

      iterativeLog([1, 2, 3])

      expect(log).toHaveBeenCalledWith('0: 1')
      expect(log).toHaveBeenCalledWith('1: 2')
      expect(log).toHaveBeenCalledWith('2: 3')

      log.restore()
      expect.restoreSpies()
    })
  })

  function iterativeLog(array) {
      array.forEach((element, index, array) => {
        console.log(`${index}: ${element}`);
    });

    function iterativeLog(array.forEach((element, index, array) => {
      console.log(`${index}: ${element}`);
    });


    function iterativeLog(element, index, array) {
      array.forEach(console.log(`${index}: ${element}`);

      function iterativeLog(element, index, array) {
        array.forEach(console.log(`${index}: ${element}`);
      }
    }
  }
*/
