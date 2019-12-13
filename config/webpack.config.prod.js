const merge = require('webpack-merge')

const commonClient = require('./webpack.config.js')

module.exports = merge(commonClient, {
  mode: 'production'
})
