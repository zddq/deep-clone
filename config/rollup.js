var pkg = require('../package.json');
var babel = require('rollup-plugin-babel')

var version = pkg.version;

var banner = `/*!
* ${pkg.name} ${version}
* Licensed under MIT
*/
`
exports.banner = banner;

function getCompiler(opt){
  return babel({
    babelrc: false,
    runtimeHelpers: true,
    presets:[
      ['@babel/preset-env',{
        targets: {browsers: 'last 2 versions, > 1%, ie >=8, Chrome >= 45, safari >= 10', node: '0.12',},
        modules: false,
        loose: false,
      }]
    ],
    plugins: [
      ['@babel/plugin-transform-runtime',{corejs: 2}]
    ],
    env: {
      "test": {
        plugins:["istanbul"]
      }
    },
    exclude: 'node_modules/**'
  })
}
exports.getCompiler = getCompiler;