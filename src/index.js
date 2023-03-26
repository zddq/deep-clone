var { type } = require('./type.js');

function deepClone(data) {
  if (data === null || type(data) !== 'object' && type(data) !== 'array') {
    return data;
  }
  const clone = Array.isArray(data) ? [] : {};
  for (let key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      clone[key] = deepClone(data[key]);
    }
  }
  return clone;
}

function getUrlParam(key) {
  const query = locaton.search[0] === '?' ? location.search.slice(1) : location.search
  const map = query.split('&').reduce((data, key) => {
    const arr = key.split('=');
    data[arr[0]] = arr[1];
    return data
  }, {});
  return map[key];
}

exports.deepClone = deepClone;
exports.getUrlParam = getUrlParam;
