const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const webpack  = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        'home':'./src/index.js',
         'other':'./src/other.js'
    },
    output: {
        filename: '[name].bundle.[hash:8].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        port: 8082,
        progress: true,
        contentBase: './dist'
    },
          
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'home.html',
            chunks:['home']
          }),
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'other.html',
            chunks:['other']
          })
    ],
 
}