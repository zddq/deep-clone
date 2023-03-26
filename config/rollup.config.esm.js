var common = require('./rollup.js');

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.esm.js',
    format: 'es',
    banner: common.banner
  },
  plugins: [common.getCompiler()]
}