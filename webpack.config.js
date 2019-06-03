const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');




const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        main:'./src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // libraryTarget:'umd'
    },
    devtool:'source-map',
    resolveLoader:{
        modules:[
            'node_modules',
            path.relative(__dirname,'loaders')
        ]     
        //  alias:{// 别名
        //      loader1:path.resolve(__dirname,'loaders','loader1')
        //  }
    },
    watch:true,
    module:{
        rules:[
            {
                test: /\.js$/,
                use: {
                    loader:'banner-loader',
                    options:{
                      text:'banner content in banner loader',
                      template:path.resolve(__dirname,'banner.js')
                    }
                }
            },
            // {
            //     test: /\.js$/,
            //     exclude: /(node_modules)/,
            //     use: {
            //         loader:'js-loader',
            //         options:{
            //             presets:['@babel/preset-env']
            //         }
            //     }
            // },
            {
                test:/\.(le|c)ss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
  
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'My App',
            template: './public/index.html'
        })
    ],

}