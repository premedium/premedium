const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';
console.log(process.env);
console.log(isDevelopment);
module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: isDevelopment ? path.resolve(__dirname, '/') : path.resolve(__dirname, '../public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.module\.s([ac])ss$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.s([ac])ss$/,
        exclude: /\.module.(s([ac])ss)$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? 'main.css' : 'main.[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
    }),
  ],
  devServer: {
    stats: {
      children: false,
      maxModules: 0,
    },
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.sass'],
  },
};
