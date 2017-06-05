var path = require('path')


module.exports = {
    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react']，
              plugins: ['transform-runtime']
            }
          }
        },
        {
          test: /\.css$/,
          exclude: /(node_modules|bower_components)/,
          use: [ 'style-loader', 'css-loader' ]
        }
      ]
    }
}