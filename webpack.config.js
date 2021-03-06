const path = require('path')

module.exports = {
  entry: './src/index',
  devServer: {
    historyApiFallback: {
      index: 'index.html',
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src'),
    ],
    extensions: ['.js'],
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.sass$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
          }, {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  mode: 'development',
}
