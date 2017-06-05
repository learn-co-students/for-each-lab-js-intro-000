
/*
Define a function, iterativeLog(), that accepts an array. Call .forEach() on this array,
and inside the callback, log each element with the format
${index}: ${element}.
*/
function iterativeLog(arr) {

   arr.forEach( function(element,index,arr) {console.log( `${index}: ${element}` )} )
}
/*
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
*/
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/*
Define a function, iterate, that accepts a callback.
Within the iterate() function, you should initialize an array.
It can contain anything you want, but make sure that it is not empty!
 Call .forEach() on this array, passing the callback to .forEach().
Then return the array that you initialized.
*/
function iterate(callback) {

arrA = [11, 22, 33, 44, 55] ;

arrA.forEach(callback) ;

return arrA ;

}
/*
describe('iterate(callback)', function() {
  it('calls the callback on an internal array, then returns the array', function() {
    const forEach = expect.spyOn(Array.prototype, 'forEach').andCallThrough()
    const callback = expect.createSpy()

    const result = iterate(callback)

    // This is a hack to fix the fact that
    // this assertion is checked before forEach()
    // has been called. Totally unclear why that's
    // the case, since forEach *should* be blocking.
    setTimeout(() => {
      expect(forEach).toHaveBeenCalled()
    }, 1)
    expect(callback.calls.length).toBeGreaterThanOrEqualTo(1)
    expect(Array.isArray(result)).toBe(true)
  })
})
*/
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/*
Define a function, doToArray that accepts an array and a callback.
Call .forEach() on the array, passing the callback as the forEach callback.
*/

function doToArray(arr, callback) {

arr.forEach(callback);
}
/*
describe('doToArray(array, callback)', function() {
  it('uses `callback` as the callback for `array`.forEach', function() {
    const array = [1, 2, 3]
    const callback = expect.createSpy()

    doToArray(array, callback)

    expect(callback.calls.length).toEqual(3)
  })
})
*/
