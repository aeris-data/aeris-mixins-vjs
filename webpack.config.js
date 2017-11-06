const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname + '/src/aeris-mixins.js'),
  output: {
    path: path.resolve(__dirname + '/dist/'),
    filename: 'aeris-mixins.js',
    libraryTarget: 'umd',
    // These options are useful if the user wants to load the module with AMD
    library: 'aeris-mixins',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/
      }
     
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    })
  ]
};