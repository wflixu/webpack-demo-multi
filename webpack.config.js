const path = require('path');

// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  // JavaScript 执行入口文件
  entry: {
    main: './src/index.js'
    // about: './src/about.js'
  },
  output: {
    filename: '[name].js',
    // 把输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist')
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // {
      //   // 用正则去匹配要用该 loader 转换的 CSS 文件
      //   test: /\.css$/,
      //   use: ExtractTextPlugin.extract({
      //     use: ['style-loader', 'css-loader', 'postcss-loader'],
      //     include: path.join(__dirname, './src'),
      //     exclude: /node_modules/
      //   })
      // },
      {
        test: /\.(png|jpg|gif|svg|bmp|eot|woff|woff2|ttf)$/,
        use: ['file-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      }
      // {
      //   test: /\.(png|jpg|gif|svg|bmp|eot|woff|woff2|ttf)$/,
      //   loader: {
      //     loader: 'url-loader',
      //     options: {
      //       limit: 5 * 1024, // 图片大小 > limit 使用file-loader, 反之使用url-loader
      //       outputPath: '' // 指定打包后的图片位置
      //     }
      //   }
      // }

      // {
      //   test: /\.(html|html)$/,
      //   use: 'html-withimg-loader',
      //   include: path.join(__dirname, './src'),
      //   exclude: /node_modules/
      // }
    ]
  }
  // devtool: 'eval-source-map',
  // plugins: [
  //   new ExtractTextPlugin({
  //     // 从 .js 文件中提取出来的 .css 文件的名称
  //     filename: `[name]_[contenthash:8].css`
  //   }),
  //   new HtmlWebpackPlugin({
  //     template: './src/index.html', // 指定产出的模板
  //     filename: 'base.html', // 产出的文件名
  //     chunks: ['common', 'base'], // 在产出的HTML文件里引入哪些代码块
  //     hash: true, // 名称是否哈希值
  //     title: 'base', // 可以给模板设置变量名，在html模板中调用 htmlWebpackPlugin.options.title 可以使用
  //     minify: {
  //       // 对html文件进行压缩
  //       removeAttributeQuotes: true // 移除双引号
  //     }
  //   }),
  //   new HtmlWebpackPlugin({
  //     minify: {
  //       removeAttributeQuotes: true
  //     },
  //     hash: true,
  //     template: './src/index.html',
  //     chunks: ['index'],
  //     filename: 'index.html'
  //   }),
  //   new HtmlWebpackPlugin({
  //     minify: {
  //       removeAttributeQuotes: true
  //     },
  //     hash: true,
  //     chunks: ['login'],
  //     template: './src/login.html',
  //     filename: 'login.html'
  //   }),
  //   new CopyWebpackPlugin([
  //     {
  //       from: path.join(__dirname, 'public'), // 从哪里复制
  //       to: path.join(__dirname, 'dist', 'public') // 复制到哪里
  //     }
  //   ]),
  //   new CleanWebpackPlugin([path.join(__dirname, 'dist')]),
  //   new UglifyjsWebpackPlugin(),
  //   new webpack.ProvidePlugin({
  //     _: 'lodash'
  //   })
  // ],
  // externals: {
  //   jquery: 'jQuery'
  //   //如果要在浏览器中运行，那么不用添加什么前缀，默认设置就是global
  // },
  // watch: true,
  // watchOptions: {
  //   ignored: /node_modules/, //忽略不用监听变更的目录
  //   aggregateTimeout: 500, // 文件发生改变后多长时间后再重新编译（Add a delay before rebuilding once the first file changed ）
  //   poll: 1000 //每秒询问的文件变更的次数
  // }
};
