const merge = require('webpack-merge')
const commonClient = require('./webpack.config.js')
const path = require('path')

module.exports = merge(commonClient, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, '../src/'),
    historyApiFallback: { disableDotRule: true },
    watchOptions: {
      ignored: /node_modules/
    }
  }
})
