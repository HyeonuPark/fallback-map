require('babel-polyfill')

var expect = require('chai').expect

var FallbackMap = require('../index').FallbackMap

describe('FallbackMap', function () {
  it('should return plain Map object', function () {
    expect(FallbackMap()).to.be.an.instanceof(Map)
  })

  describe('#get', function () {
    function fallback (key, map) {
      return key
    }
    var fbMap = FallbackMap(fallback)
    fbMap.set('key1', 'someValue')
    fbMap.set('key2', undefined)

    it('should return stored value if exist', function () {
      expect(fbMap.get('key1')).to.equal('someValue')
    })

    it('should return values from fallback function if not exist', function () {
      expect(fbMap.get('newKey')).to.equal('newKey')
    })

    it('should not trigger fallback function when undefined is stored', function () {
      expect(fbMap.get('key2')).to.equal(undefined)
    })
  })

  it('should treat non-function parameter as default value', function () {
    var fbMap = FallbackMap('defaultValue')
    expect(fbMap.get('someKey')).to.equal('defaultValue')
  })
})
