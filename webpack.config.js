const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const ENV = process.env.NODE_ENV;
const DEV = ENV === 'development';

module.exports = {
  entry: [
    './client/index.js'
  ],
  output: {
    path: `${__dirname}/dist/`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      },
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        'style',
        'css?sourceMap!sass?sourceMap'      )
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './dist'
  },
  plugins: [
    new ExtractTextPlugin('./style.css')
  ]
};
