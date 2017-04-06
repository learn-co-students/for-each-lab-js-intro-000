  describe('doToArray(array, callback)', function() {
    it('uses `callback` as the callback for `array`.forEach', function() {
      const array = [1, 2, 3]
      const callback = expect.createSpy()

      doToArray(array, callback)

      expect(callback.calls.length).toEqual(3)
    })
  })
