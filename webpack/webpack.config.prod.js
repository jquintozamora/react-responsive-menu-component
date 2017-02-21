///////////////////////////////////////////////////////////////////////////////////////////////////
//  WebPack PROD Config
///////////////////////////////////////////////////////////////////////////////////////////////////
//
//  author: Jose Quinto - https://blogs.josequinto.com
//
//  More webpack examples: https://github.com/webpack/webpack/tree/master/examples
//  WebPack 2 Migrating guide: https://webpack.js.org/guides/migrating/
//
///////////////////////////////////////////////////////////////////////////////////////////////////

const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  // To enhance the debugging process. More info: https://webpack.js.org/configuration/devtool/
  devtool: 'source-map',
  target: 'web',
  entry: {
    'app': [
      './app/src/index.jsx'
    ]
  },
  output: {
    path: resolve(__dirname, './../dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')      // Reduces 78 kb on React library
      },
      'DEBUG': false,                                 // Doesn´t have effect on my example
      '__DEVTOOLS__': false                           // Doesn´t have effect on my example
    }),
    new ExtractTextPlugin({
      filename: '../dist/main.css',
      allChunks: true
    }),
    // Plugings for optimizing size and performance.
    // Here you have all the available by now: 
    //    Webpack 1. https://github.com/webpack/webpack/blob/v1.13.3/lib/optimize
    //    Webpack 2. https://github.com/webpack/webpack/tree/master/lib/optimize
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        drop_console: true,
        drop_debugger: true,
        global_defs: {
          __REACT_HOT_LOADER__: undefined // eslint-disable-line no-undefined
        }
      },
      minimize: true,
      debug: false,
      sourceMap: true,
      output: {
        comments: false
      },

    })
  ],
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
        include: resolve(__dirname, './../app/src')  // Use include instead exclude to improve build performance
      },
      {
        test: /\.css$/,
        include: resolve(__dirname, './../app/stylesheets'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 1,
                minimize: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: () => [
                  require("postcss-import")({
                    //If you are using postcss-import v8.2.0 & postcss-loader v1.0.0 or later, this is unnecessary.
                    //addDependencyTo: webpack // Must be first item in list
                  }),
                  require("postcss-nesting")(),  // Following CSS Nesting Module Level 3: http://tabatkins.github.io/specs/css-nesting/
                  require("postcss-simple-vars")(),
                  require("autoprefixer")({
                    browsers: ["last 1 version"] //https://github.com/ai/browserslist
                  })
                ]
              }
            }
          ]
        })
      }
    ]
  }
};