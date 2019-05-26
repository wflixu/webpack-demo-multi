const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

const webpack  = require('webpack');

module.exports = {
    mode: 'development',
    // mode: 'production',
    optimization: {
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin({})
        ],
    },
    entry: './src/index.js',
    devServer: {
        port: 8082,
        progress: true,
        contentBase: './dist'
    },
    module: {
        rules: [
            // {
            //     test:require.resolve('jquery'),
            //     use:"expose-loader?$"
            // },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'eslint-loader',
                        options:{
                            enforce: 'pre'
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            "presets": [
                                '@babel/preset-env'
                            ],
                            "plugins": [
                                ["@babel/plugin-proposal-decorators", { "legacy": true }],
                                [
                                    "@babel/plugin-transform-runtime",
                                    {
                                        "absoluteRuntime": false,
                                        "corejs": false,
                                        "helpers": true,
                                        "regenerator": true,
                                        "useESModules": false
                                    }
                                ]
                            ]
                        },
                    },
                ],
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/
            },
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
        new webpack.ProvidePlugin({
            $:'jquery'
        })
    ],
    output: {
        filename: '[name].bundle.[hash:8].js',
        path: path.resolve(__dirname, 'dist')
    }
}