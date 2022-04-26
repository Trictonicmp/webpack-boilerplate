const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader", 
          "css-loader"
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 9000,
    compress: true
  }
};