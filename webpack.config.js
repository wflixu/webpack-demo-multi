const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const webpack  = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        'main':'./src/index.js',
    },
    module:{
        rules:[
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
        ]
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
            template:'./public/index.html'
          }),
       
    ],
 
}