const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Axios Demo',
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|jpeg|gif|svg)$/,
        use: ['file-loader']
      }
    ]
  },
  devServer: {
    open: true,
    publicPath: '',
    contentBase: path.resolve(__dirname, 'src'),
    watchContentBase: true,
    compress: true
  }
}