const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const findProcessVariable = (key) => {
  let value = null;
  // eslint-disable-next-line consistent-return
  process.argv.forEach((element, index) => {
    if (element === key) {
      value = process.argv[index + 1];
    }
  });
  return value;
};

const isCustomDev = findProcessVariable('--customMode') === 'dev';

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: isCustomDev
      ? path.resolve(__dirname, '/')
      : path.resolve(__dirname, '../public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: isCustomDev ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.module\.s([ac])ss$/,
        loader: [
          isCustomDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: isCustomDev
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isCustomDev
            }
          }
        ]
      },
      {
        test: /\.s([ac])ss$/,
        exclude: /\.module.(s([ac])ss)$/,
        loader: [
          isCustomDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isCustomDev
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: isCustomDev ? 'main.css' : 'main.[hash].css',
      chunkFilename: isCustomDev ? '[id].css' : '[id].[hash].css'
    })
  ],
  devServer: {
    stats: {
      children: false,
      maxModules: 0
    },
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    hot: true,
    port: 3000
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.sass']
  }
};
