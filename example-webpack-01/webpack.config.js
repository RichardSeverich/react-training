/**
 * Entry: Configure entry file.
 * Output: Configure output.
 * Loaders: 
 *     - import "./file.css". 
 *     - import "./file.scss".
 *     - import images.
 *     - import fonts
 * Plugins:
 * Mode:
*/
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    fileName: 'index.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugin: [new HTMLWebpackPlugin(
    {
      filename: 'index.html',
      template: './index.html'
    }
  )],
  mode: 'depelopment'
}
