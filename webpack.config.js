const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const webpack = require('webpack');

module.exports = {
    mode: 'development',
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: {
                    minSize: 0,
                    chunks: 'initial',
                    minChunks: 2,
                },
                vendor: {
                    priority: 1,
                    test: /node_modules/,
                    minSize: 0,
                    chunks: 'initial',
                    minChunks: 2,
                },

            }
        }
    },
    entry: {
        'main': './src/index.js',
    },
    output: {
        filename: '[name].bundle.[hash:8].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        port: 8082,
        progress: true,
        open:true,
        hot: true,
        contentBase: './dist'
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'My App',
            template: './public/index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()

    ],

}