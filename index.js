'use strict'

module.exports = Storage

Storage.prototype.getItem = function getItem (key) {
  if (this.hasOwnProperty(key)) {
    return String(this[key])
  }
  return null
}

Storage.prototype.setItem = function setItem (key, val) {
  this[key] = String(val)
}

Storage.prototype.removeItem = function removeItem (key) {
  delete this[key]
}

Storage.prototype.clear = function clear () {
  Object.keys(this).forEach(function (key) {
    this[key] = undefined
    delete this[key]
  }, this)
}

Storage.prototype.key = function key (index) {
  index = index || 0
  return Object.keys(this)[index]
}

Object.defineProperty(Storage.prototype, 'length', {
  get: function get () {
    return Object.keys(this).length
  }
})

function Storage () {
  if (!(this instanceof Storage)) {
    return new Storage()
  }
}
