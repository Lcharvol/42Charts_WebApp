const path = require('path');
const webpack = require('webpack');

const webpackConfig = {
  entry: ['babel-polyfill', './src/client/index.js'],

  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  node: {
    fs: 'empty',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file?name=public/[name].[ext]',
      },
    ],
  },
};

module.exports = webpackConfig;
