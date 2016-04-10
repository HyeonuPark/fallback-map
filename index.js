var undefined

exports.FallbackMap = function FallbackMap (fallback) {
  var map = new Map()
  var mapGet = map.get

  if (typeof fallback !== 'function') {
    var givenFallback = fallback
    fallback = function fallback () {
      return givenFallback
    }
  }

  map.get = function get (key) {
    var result = mapGet.call(map, key)
    if (result !== undefined) {
      return result
    }
    if (map.has(key)) {
      return result
    }

    result = fallback(key, map)
    map.set(key, result)
    return result
  }

  return map
}
