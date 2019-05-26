const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    // mode:'development',
    mode:'production',
    entry:'./src/index.js',
    devServer:{
        port:8082,
        progress:true,
        open:true,
        contentBase:'./dist'
    },
    plugins:[
       new HtmlWebpackPlugin({
           template:'./public/index.html',
           filename:'index.html',
           minify:{
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
           },
           hash:true
       })
    ],
    output:{
       filename:'[name].bundle[hash:8].js',
       path:path.resolve(__dirname,'dist')
   }
}