const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
module.exports = {
    mode: 'development',
    // mode: 'production',
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    entry: './src/index.js',
    devServer: {
        port: 8082,
        progress: true,
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.(le|c)ss$/,
                use: [{
                    loader: 'style-loader',
                    options: {
                        insertAt: 'top'
                    }
                },
                    'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [require('autoprefixer')]
                    }
                },
                    'less-loader'
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            minify: {
                removeComments: true,
            },
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        }),
    ],
    output: {
        filename: '[name].bundle[hash:8].js',
        path: path.resolve(__dirname, 'dist')
    }
}