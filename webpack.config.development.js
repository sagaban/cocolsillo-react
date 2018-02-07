const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const firebaseConfig = require('./firebase.config');

const port = process.env.PORT || 3000;

const APP = path.join(__dirname, 'app');

module.exports = {
  entry: [ 'react-hot-loader/patch', APP ],
  output: {
    filename: '[name].[hash].js',
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
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              sourceMap: true,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.png',
    }),
    new webpack.DefinePlugin({
      firebaseConfig: JSON.stringify(firebaseConfig),
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: [ 'vendor' ],
      minChunks: Infinity,
    }),
  ],

  devServer: {
    host: 'localhost',
    port,
    historyApiFallback: true,
    open: true,
    hot: true,
  },
};
