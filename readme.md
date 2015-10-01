# storage-sham [![Build Status](https://travis-ci.org/bendrucker/storage-sham.svg?branch=master)](https://travis-ci.org/bendrucker/storage-sham)

> API-compatible in-memory sham for browser Storage


## Install

```
$ npm install --save storage-sham
```


## Usage

```js
var Storage = require('storage-sham')
var storage = Storage()

storage.setItem('foo', 'bar')
storage.getItem('foo')
//=> bar
```

## Related

* Adapted from [node-localStorage](https://github.com/coolaj86/node-localStorage)


## License

MIT © [Ben Drucker](http://bendrucker.me)
