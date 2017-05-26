const webpack = require('webpack');
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
// var ChunkManifestPlugin =
// require('chunk-manifest-webp
// ack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// webpack-dashboard
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');
const dashboard = new Dashboard();

const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const vendors = [
  'react',
  'react-dom',
  'react-router',
  'react-router-redux',
  'redux',
  "react-redux",
  'velocity-react',
  'velocity-animate',
  'rc-queue-anim',
  // ...其它库
];
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
    index: [
      'react-hot-loader/patch', 'webpack-dev-server/client?http' +
          '://0.0.0.0:8080',
      'webpack/hot/only-dev-server',
      './src/index.js'
    ],
    "vendor": vendors
  },
  //入口文件输出配置
  output: {
    'path': path.resolve(__dirname, './build'),
    'publicPath': '/', // 网站运行时的访问路径
    'filename': 'js/[name].[hash:8].js',
    'chunkFilename': 'js/page[name]-[chunkhash:8].js',
    'library': '[name]'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css', '.less'] //require 的时候，可以不用写文件类型
  },
  module: {
    // 加载器配置
    // 凡是.js结尾的文件都是用babel-loader做处理
    // ，而.jsx结尾的文件会先经过jsx-loader处理，
    // 然后经过babel-loader处理
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader'],
        include: /src/
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
        test: /\.(gif|jpg|png|woff|svg|eot|ttf|otf)\??.*$/,
        use: 'url-loader?limit=10000&name=fo' +
            'nts/[hash:8].[name].[ext]'
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader?modules"})
      }, {
        test: routeComponentRegex,
        include: path.resolve(__dirname, 'src'),
        use: ['bundle-loader?lazy', 'babel-loader']
      }
    ]
  },
  // externals: {     'react':
  // 'React',     'react-dom':
  // 'ReactDOM' },
  devtool: 'inline-source-map',
  //插件项
  plugins: [ //将外部的包导出成一个公用的文件比如 jquery，react, react-dom 等
    new DashboardPlugin(dashboard.setData),
    new HtmlwebpackPlugin({
      template: __dirname + '/src/statics/index.html', //html模板路径
      filename: 'index.html',
      inject: true, //允许插件修改哪些内容，包括head与body
      hash: false //为静态资源生成hash值
    }), //添加我们的插件 会自动生成一个html文件
    new webpack.DefinePlugin({ //开发模式
      "process.env": {
        NODE_ENV: JSON.stringify("development") //development,production
      },
      __DEVTOOLS__: true
    }),
    new webpack.NoEmitOnErrorsPlugin(), //启用报错不打断模式
    new webpack.HotModuleReplacementPlugin(), //热替换插件
    new webpack.NamedModulesPlugin(),
    new CommonsChunkPlugin({
      names: [
        'vendor', 'manifest'
      ],
      // filename: "vendor.js", (Give
      // the chunk a different
      // name)
      minChunks: Infinity,
      // (with more entries, this
      // ensures that no other
      // module  goes into the vendor
      // chunk)
    }),
    new webpack.LoaderOptionsPlugin({debug: true}),
    new ExtractTextPlugin("style/[name].[chunkhash].css")
  ]
};
