const webpack = require('webpack');
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const minSize = {
  minChunkSize: 51200,
  compress: {
    warnings: false
  }
};
const routeComponentRegex = /pages\/([^\/]+\/?[^\/]+).js$/

module.exports = {
  //页面入口文件配置
  entry: {
    index: ['./src/index.js'],
    vendor: [
      "react",
      "react-dom",
      "react-router",
      "redux",
      'react-redux',
      'react-router-redux'
    ]
  },
  //入口文件输出配置
  output: {
    path: path.join(__dirname, 'dist'),
    // 'publicPath': '/build',//
    // 网站运行时的访问路径
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/page[name]-[chunkhash:8].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css', '.less'] //require 的时候，可以不用写文件类型
  },
  module: {
    // 加载器配置
    // 凡是.js结尾的文件都是用babel-loader做处理
    // ，而.jsx结尾的文件会先经过jsx-loader处理，
    // 然后经过babel-loader处理
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        // 在这里添加
        // react-hot，注意这里使用的是loaders，所以
        // 不能用 query，应该把presets参数写在
        // babel 的后面
        loader: 'babel-loader',
        include: /src/
      }, {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf|otf)\??.*$/,
        use: 'url-loader?limit=10000&name=fo' +
            'nts/[hash:8].[name].[ext]'
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          // resolve-url-loader may be
          // chained before sass-loader
          // if necessary
          use: ['css-loader', 'sass-loader']
        })
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader?modules"})
      }, {
        test: /\.html$/,
        use: 'html-loader'
      }, {
        test: routeComponentRegex,
        include: path.resolve(__dirname, 'src'),
        use: ['bundle-loader?lazy', 'babel-loader']
      }
      // {test: /\.(png|jpg|gif)$/,
      // loader:
      // "url-loader?limit=8192&name=
      // ./img/[hash].[ext]"}
    ]
  },
  //  devtool:
  // 'cheap-module-source-map',
  // 插件项
  plugins: [ //将外部的包导出成一个公用的文件比如 jquery，react, react-dom 等
    //  new webpack.optimize.MinChunkSizePlugin(minSize), //合并小尺寸chunk
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 50, entryChunkMultiplicator: 2}),
    new CommonsChunkPlugin({
      names: [
        'vendor', 'manifest'
      ],
      // filename: "vendor.js" (Give
      // the chunk a different name)
      minChunks: Infinity,
      // (with more entries, this
      // ensures that no other
      // module  goes into the vendor
      // chunk)
    }),
    new HtmlwebpackPlugin({
      template: __dirname + '/src/statics/index.html', //html模板路径
      filename: 'index.html',
      inject: true, //允许插件修改哪些内容，包括head与body
      hash: false //为静态资源生成hash值
    }), //添加我们的插件 会自动生成一个html文件
    new webpack.DefinePlugin({ //开发模式
      "process.env": {
        NODE_ENV: JSON.stringify("production") //development,production
      },
      __DEVTOOLS__: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_console: true,
        warnings: false
      },
      sourceMap: false
    }),
    new webpack.LoaderOptionsPlugin({minimize: true}),
    new ExtractTextPlugin("style/[name]-[chunkhash:8].css"),
    new webpack.NoEmitOnErrorsPlugin(), //启用报错不打断模式
  ]
};
