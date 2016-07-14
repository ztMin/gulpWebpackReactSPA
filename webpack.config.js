var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var path = require('path');
/*
var fs = require('fs');
var srcDir = path.resolve(process.cwd(), 'app');
var jsPath = path.resolve(srcDir, 'view');
var dirs = fs.readdirSync(jsPath);
var matchs = [], files = {
  app:path.resolve(srcDir, '', 'app.js')
};
dirs.forEach(function (item) {
    matchs = item.match(/(.+)\.js$/);
    if (matchs) {
        files[matchs[1]] = path.resolve(srcDir, 'view', item);
    }
});
*/
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
module.exports = {
  entry: {app:'./app/app.js'},
  output: {
    path: './dist',
    chunkFilename: '[id].chunk.js',
    filename: "[name].js"                  //根据入口文件输出的对应多个文件名
  },
  /*
  devServer:{
    hot: true,
    historyApiFallback:true,
    port:3000,
    contentBase:'./dist'
  },
  */
  module: {
    loaders:[
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  },
  /*
  resolve: {
    alias: {
      'react': pathToReact
    }
  },
  */
  plugins: [
      //将公共代码抽离出来合并为一个文件
      new CommonsChunkPlugin('common.js')
      /*
      //js文件的压缩
      ,new uglifyJsPlugin({
          compress: {
              warnings: false
          }
      })
      */
  ]
};