[![Build Status](https://travis-ci.org/ssnau/savejs.svg)](https://travis-ci.org/ssnau/savejs)
[![npm version](https://badge.fury.io/js/savejs.svg)](http://badge.fury.io/js/savejs)
[![Dependency Status](https://david-dm.org/ssnau/savejs.svg)](https://david-dm.org/ssnau/savejs.svg)
[![Dependency Status](https://david-dm.org/ssnau/savejs.svg)](https://david-dm.org/ssnau/savejs.svg)
[![Sauce Test Status](https://saucelabs.com/browser-matrix/ssnau.svg)](https://saucelabs.com/u/ssnau)


SaveJS
-------

A simple javascript util library.


APIs
-----

###get(object, path, defaultValue)#

Given an object and a path, return the path value of the object.
```javascript
save.get({a: 'hello'}, 'a') => 'hello'
save.get({a: {b:'world'}}, 'a.b') => 'world'
save.get({a: {b:'world'}}, 'a.b.c') => undefined
save.get({a: {b:'world'}}, 'a.b.c', 'jack') => 'jack'
```

###hasOwn

Given an object and a path, return if the object contains the path.

```javascript
save.hasOwn({a: 'hello'}, 'a') => true
save.hasOwn({a: {b:'world'}}, 'a.b') => true
save.hasOwn({a: {b:'world'}}, 'a.b.c') => false
save.hasOwn({a: {b: false}}, 'a.b') => true

```

License
----
MIT
