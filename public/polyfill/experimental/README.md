Experimental
============

### ES7

[Details](es7.md)

### Binary Data

[script](bindata.js) -
[demo page](https://inexorabletash.github.io/polyfill/experimental/demos/bindata.html)

Proposed for ES7 - http://wiki.ecmascript.org/doku.php?id=harmony:typed_objects

### Fetch

[script](fetch.js) -
[tests](http://inexorabletash.github.io/polyfill/experimental/tests/fetch.html) -
[living standard](https://fetch.spec.whatwg.org)

Example:

```js
fetch('http://example.com/foo.json')
  .then(function(response) { return response.json(); })
  .then(function(data) { console.log(data); });
```

Supported:
* Headers: `new Headers()`, `append(name, value)`, `delete(name)`, `get(name)`, `getAll(name)`, `has(name)`, `set(name, value)`, `[Symbol.iterator]()`
* Body: `arrayBuffer()`, `blob()`, `formData()`, `json()`, `text()` - but conversions are limited
* Request: `new Request(input, init)`, `method`, `headers`, `body`, `url`
* Response: `new Response(body, init)`, `headers`, `url`, `status`, `statusText`, `body`
* `fetch(input, init)`
