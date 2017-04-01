// @flow

import webpack from 'webpack'
import { join } from 'path'
import { WDS_PORT } from './config'
import { isProd } from '../utils'

module.exports = {
  entry: [
    'react-hot-loader/patch',
    join(__dirname, '../../client'),
  ],
  output: {
    filename: 'js/bundle.js',
    path: join(__dirname, '../../static/dist'),
    publicPath: isProd ? '/' : `http://localhost:${WDS_PORT}/dist/`,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: WDS_PORT,
    hot: true,
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}
