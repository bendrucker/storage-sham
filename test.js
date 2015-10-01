'use strict'

var test = require('tape')
var Storage = require('./')

test(function (t) {
  var storage = Storage()
  t.equal(storage.getItem('key'), null)

  storage.setItem('a', 1)
  t.equal(storage.key(0), 'a')

  storage.setItem('b', '2')
  t.equal(storage.getItem('a'), '1')
  t.equal(storage.getItem('b'), '2')
  t.equal(storage.length, 2)

  t.equal(storage['c'], undefined)
  t.equal(storage.getItem('c'), null)

  storage.setItem('c')
  t.equal(storage.getItem('c'), 'undefined')
  t.equal(storage.length, 3)

  storage.removeItem('c')
  t.equal(storage.getItem('c'), null)
  t.equal(storage.length, 2)

  storage.clear()
  t.equal(storage.getItem('a'), null)
  t.equal(storage.getItem('b'), null)
  t.equal(storage.length, 0)

  t.end()
})
