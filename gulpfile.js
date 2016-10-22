var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");
var webpackserver = require("./webpack.server.js");

gulp.task("default", ["webpack-dev-server"]);

gulp.task("webpack-dev-server", function(callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);
    myConfig.devtool = "eval";
    myConfig.debug = true;

    // Start a webpack-dev-server
    new WebpackDevServer(webpack(myConfig), {
        contentBase:"./build/",
        stats: {
            colors: true
        },
        hot: true,
        inline: true,
        proxy: {
            '/personal*': {
                target: 'http://www.baidu.com',
                secure: false,
                changeOrigin: true
            },
            '/api/*': {
                target: 'http://192.168.1.2:9090/',
                secure: false,
                changeOrigin: true
            },
        },
    }).listen(3000, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://localhost:3000/webpack-dev-server/index.html");
    });
});

// Production build
gulp.task("build", ["webpack:build"]);

gulp.task("webpack:build", function(callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackserver);
    // run webpack
    webpack(myConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build", err);
        gutil.log("[webpack:build]", stats.toString({
            colors: true
        }));
        callback();
    });
});
