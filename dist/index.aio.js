/*!
* deep-clone 0.0.1
* Licensed under MIT
*/

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@babel/runtime-corejs2/core-js/array/is-array')) :
  typeof define === 'function' && define.amd ? define(['@babel/runtime-corejs2/core-js/array/is-array'], factory) :
  (factory(global._Array$isArray));
}(this, (function (_Array$isArray) { 'use strict';

  _Array$isArray = _Array$isArray && _Array$isArray.hasOwnProperty('default') ? _Array$isArray['default'] : _Array$isArray;

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

})));
