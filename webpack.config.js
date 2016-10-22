var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //页面入口文件配置
    entry: {
        index:[
            'webpack-dev-server/client?http://127.0.0.1:3000',
            'webpack/hot/only-dev-server',
            './src/index.js'
        ]
    },
    //入口文件输出配置
    output: {
        'path': path.join(__dirname, 'build'),
        // 'publicPath': '/build',// 网站运行时的访问路径
        'filename': 'js/[name].[hash:8].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss', '.css', '.less'] //require 的时候，可以不用写文件类型
    },
    module: {
        //加载器配置
        //凡是.js结尾的文件都是用babel-loader做处理，而.jsx结尾的文件会先经过jsx-loader处理，然后经过babel-loader处理
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                // 在这里添加 react-hot，注意这里使用的是loaders，所以不能用 query，应该把presets参数写在 babel 的后面
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
            },
            {test: /\.(woff|eot|ttf)$/i, loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'},
            {test: /\.scss$/, loader: "style!css!sass"},
            //{test: /\.less$/, loader: "style!css!less"},
            {test: /\.css$/, loader: "style!css"},
            {test: /\.(png|jpg|gif)$/, loader: "url-loader?limit=8192&name=./img/[hash].[ext]"}
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    //插件项
    plugins: [//将外部的包导出成一个公用的文件比如 jquery，react, react-dom 等
        new HtmlwebpackPlugin({
            title: 'BBD',
            template: './src/index.html', //html模板路径
            filename: 'index.html',
            inject: true,  //允许插件修改哪些内容，包括head与body
            hash: false //为静态资源生成hash值
        }),//添加我们的插件 会自动生成一个html文件
        new webpack.DefinePlugin({ //开发模式
            "process.env": {
                NODE_ENV: JSON.stringify("development") //development,production
            },
            __DEVTOOLS__:true
        }),
        new webpack.NoErrorsPlugin(), //启用报错不打断模式
        new webpack.HotModuleReplacementPlugin() //热替换插件
    ]
};
