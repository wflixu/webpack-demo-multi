const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

class P {
   apply(compiler){
      compiler.hooks.emit.tap('emit',function(){
          console.log('emit 2222');
          
      })
       
   }
}


const webpack = require('webpack');

module.exports = {
    mode: 'development',

    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module:{
        rules:[
            {
                test:/\.less$/,
                use:[
                    path.resolve(__dirname,'loaders','style-loader'),
                    path.resolve(__dirname,'loaders','less-loader')
                ]
            }
        ]
    },
  
    plugins: [
        // new CleanWebpackPlugin(),
        // new HtmlWebpackPlugin({
        //     title: 'My App',
        //     template: './public/index.html'
        // }),
        new P()
      

    ],

}