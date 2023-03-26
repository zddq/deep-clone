const JSDOM = require('mocha-jsdom');
var expect = require('expect.js');
// var {deepClone} = require('../dist/index.js')
var {deepClone,getUrlParam} = require('../src/index.js')

describe("获取当前 URL 中的参数", function () {

  it('参数(id)的值', function () {
    expect(getUrlParam('id')).to.be.equal('1')
  })
})

describe('function deepClone', function () {
  describe('param data', function () {
    it('正确的测试用例', function(){
      // 基本数据类型
      expect(deepClone('abc')).to.equal('abc')

      // 数组
      var arr = [1, [2]];
      var cloneArr = deepClone(arr);
      expect(cloneArr).not.to.equal(arr);
      expect(cloneArr).to.eql(arr);

      // 对象
      var obj = {a: {b: 1}};
      var cloneObj = deepClone(obj)
      expect(cloneObj).not.to.equal(obj);
      expect(cloneObj).to.eql(obj);
    })

    it('边界值测试用例', function(){
      expect(deepClone()).to.equal(undefined);

      expect(deepClone(undefined)).to.equal(undefined);

      expect(deepClone(null)).to.equal(null);
    })
  })
})