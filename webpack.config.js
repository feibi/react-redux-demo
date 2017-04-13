let webpack = require('webpack');
let path = require('path');
let HtmlwebpackPlugin = require('html-webpack-plugin');
//var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
// webpack-dashboard
let Dashboard = require('webpack-dashboard');
let DashboardPlugin = require('webpack-dashboard/plugin');
//var dashboard = new Dashboard();

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
let minSize = {
    minChunkSize: 51200,
    compress: {
        warnings: false
    }
}
let routeComponentRegex = /containers\/([^\/]+\/?[^\/]+).js$/
module.exports = {
    //页面入口文件配置
    entry: {
        index: [
            'webpack-dev-server/client?http://0.0.0.0:8080', 'webpack/hot/only-dev-server', './src/index.js'
        ],
        "vendor": vendors
    },
    //入口文件输出配置
    output: {
        'path': path.resolve(__dirname, './build'),
        // 'publicPath': '/build',// 网站运行时的访问路径
        'filename': 'js/[name].[hash:8].js',
        'chunkFilename': 'js/[name]-[chunkhash:8].js',
        'library': '[name]'
    },
    resolve: {
        extensions: [
            '',
            '.js',
            '.jsx',
            '.scss',
            '.css',
            '.less'
        ] //require 的时候，可以不用写文件类型
    },
    module: {
        //加载器配置
        //凡是.js结尾的文件都是用babel-loader做处理，而.jsx结尾的文件会先经过jsx-loader处理，然后经过babel-loader处理
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                // 在这里添加 react-hot，注意这里使用的是loaders，所以不能用 query，应该把presets参数写在 babel 的后面
                loaders: [
                    'react-hot', 'babel'
                ],
                include: /src/
            }, {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf|otf)\??.*$/,
                loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap')
            },
            //{test: /\.less$/, loader: "style!css!less"},
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap')
            }, {
                test: routeComponentRegex,
                include: path.resolve(__dirname, 'src'),
                loaders: ['bundle?lazy', 'babel']
            }
            // {test: /\.(png|jpg|gif)$/, loader: "url-loader?limit=8192&name=./img/[hash].[ext]"}
        ]
    },
    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM'
    // },
    devtool: 'cheap-module-eval-source-map',
    //插件项
    plugins: [ //将外部的包导出成一个公用的文件比如 jquery，react, react-dom 等
        //new DashboardPlugin(dashboard.setData),
        new HtmlwebpackPlugin({
            template: __dirname + '/src/index.html', //html模板路径
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
        new webpack.NoErrorsPlugin(), //启用报错不打断模式
        new webpack.HotModuleReplacementPlugin(), //热替换插件
        new CommonsChunkPlugin({
            names: [
                'vendor', 'manifest'
            ],

            //filename: "vendor.js",
            // (Give the chunk a different name)

            minChunks: Infinity,
            // (with more entries, this ensures that no other module
            //  goes into the vendor chunk)
        }),
        new ExtractTextPlugin("style/[name].[chunkhash].css"),
        //new ChunkManifestPlugin({filename: "manifest.json", manifestVariable: "webpackManifest"})
    ]
};
