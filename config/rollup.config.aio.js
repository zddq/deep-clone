var nodeResolve = require('rollup-plugin-node-resolve');
var common = require('./rollup.js');

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.aio.js',
    format: 'umd',
    name: 'deepClone',
    banner: common.banner
  },
  plugins: [
    nodeResolve({ main: true, extensions: ['.js'], modulesOnly: true}),
    common.getCompiler(),
  ]
}