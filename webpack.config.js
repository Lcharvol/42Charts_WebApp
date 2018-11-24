const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const historyApiFallback = require('connect-history-api-fallback');
const DashboardPlugin = require('webpack-dashboard/plugin');

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
    new DashboardPlugin(),
    new BrowserSyncPlugin({
      host: '0.0.0.0',
      port: 8080,
      browser: 'google chrome',
      server: {
        baseDir: 'public',
      },
      logSnippet: false,
      reloadOnRestart: true,
      notify: false,
      middleware: [historyApiFallback()],
      snippetOptions: {
        blacklist: '*',
        rule: {
          match: /<\/body>/i,
          fn: () => '',
        },
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
