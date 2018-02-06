const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const path = require('path');

const firebaseConfig = require('./firebase.config');


const APP = path.join(__dirname, 'app');
const BUILD = path.join(__dirname, 'build');

module.exports = {
  entry: [ 'react-hot-loader/patch', APP ],
  output: {
    path: BUILD,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js',
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  resolve: {
    modules: [ APP, 'node_modules' ],
    extensions: [ '.js', '.jsx' ],
  },
  module: {
    rules: [
      // First Rule
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ],
      },
      // Second Rule
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({

          // loader that should be used when the
          // CSS is not extracted
          fallback: 'style-loader',

          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,

                // Allows to configure how many loaders
                // before css-loader should
                // be applied to @import(ed) resources
                importLoaders: 1,

                camelCase: true,

                // Create source maps for CSS files
                sourceMap: true,
              },
            },
            {
              // PostCSS will run before css-loader and will
              // minify and autoprefix our CSS rules.
              // We are also telling it to only use the last 2
              // versions of the browsers when autoprefixing
              loader: 'postcss-loader',
              options: {
                config: {
                  ctx: {
                    autoprefixer: {
                      browsers: 'last 2 versions',
                    },
                  },
                },
              },
            },
          ],
        }),
      },
    ],
  },

  plugins: [
    // DefinePlugin Allows you to create global constants
    // which can be configured at compile time.
    // Then we tell React to ignore all of the non-production
    // code with the 'production' environment variable
    // https://webpack.js.org/plugins/define-plugin/
    new webpack.DefinePlugin({
      firebaseConfig: JSON.stringify(firebaseConfig),
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    // Minify and uglify our production bundles, creating
    // source maps and removing comments
    new UglifyJsPlugin({
      sourceMap: true,
      uglifyOptions: {
        output: {
          comments: false,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.png',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: [ 'vendor' ],
      minChunks: Infinity,
    }),
    // Create the stylesheet under 'styles' directory
    new ExtractTextPlugin({
      filename: 'styles/styles.[contenthash].css',
      allChunks: true,
    }),
  ],
};
