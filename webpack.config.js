const webpack = require('webpack')

module.exports = {
  // context: __dirname + "/app",
  entry: "./browser/app.jsx",

  output: {
    filename: 'bundle.js',
    path: __dirname + '/public',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loaders: 'babel-loader',
        options: {
          presets: ['react', 'env']
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  }
}

