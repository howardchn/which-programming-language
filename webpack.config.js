const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJS = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'app', 'index'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /.js?$/,
      include: [
        path.resolve(__dirname, 'app')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'bower_components')
      ],
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.vue$/,
      use: ['vue-loader']
    }]
  },
  plugins: [
    new VueLoaderPlugin(),
    new UglifyJS(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.esm.js'
    }
  },
  devtool: 'source-map',
  devServer: {
    publicPath: path.join('/dist/')
  }
};