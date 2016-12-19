// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    rootPath: '/ec',
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    //proxyTable按照书序依次查找，以匹配到的第一条代理规则为准，所以请严格遵守顺序，
    //请将自己负责的模块注释掉
    //！！门户模块请忽略这里
    proxyTable: {
      '/rest': 'http://192.168.2.14',
      '/pc':'http://192.168.2.14',
      
      '/mall': 'http://192.168.2.14',
      // '/ec': 'http://192.168.2.14',
      '/setup': 'http://192.168.2.14',  
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
