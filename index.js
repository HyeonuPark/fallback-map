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
    if (map.has(key)) {
      return mapGet.call(map, key)
    }
    var result = fallback(key, map)
    map.set(key, result)
    return result
  }

  return map
}
