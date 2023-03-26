/*!
* deep-clone 1.0.0
* Licensed under MIT
*/

'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _Array$isArray = _interopDefault(require('@babel/runtime-corejs2/core-js/array/is-array'));

var _require = require('./type'),
  type = _require.type;
function deepClone(data) {
  if (data === null || type(data) !== 'object' && type(data) !== 'array') {
    return data;
  }
  var clone = _Array$isArray(data) ? [] : {};
  for (var key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      clone[key] = deepClone(data[key]);
    }
  }
  return clone;
}
function getUrlParam(key) {
  var query = locaton.search[0] === '?' ? location.search.slice(1) : location.search;
  var map = query.split('&').reduce(function (data, key) {
    var arr = key.split('=');
    data[arr[0]] = arr[1];
    return data;
  }, {});
  return map[key];
}
exports.deepClone = deepClone;
exports.getUrlParam = getUrlParam;
