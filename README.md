fallback-map
=============

[![Build Status](https://travis-ci.org/HyeonuPark/fallback-map.svg?branch=master)](https://travis-ci.org/HyeonuPark/fallback-map)

ES6 `Map` with lookup fallback function.

# Usage

```js
import {FallbackMap} from 'fallback-map'

const map = FallbackMap((key, map) => `default value for ${key}`)
map.set('key', 'value')

map.get('key') // 'value'
map.get('monkey') // 'default value for monkey'
```
