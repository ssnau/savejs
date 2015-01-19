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

a shortcut to `hasOwnProperty`.

```javascript
save.hasOwn({a: 'hello'}, 'a') => true
save.hasOwn({a: 'hello'}, 'b') => false

```



