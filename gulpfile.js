var gulp = require("gulp"),
    plumber = require("gulp-plumber"),
    cache = require('gulp-cache'),
    clean = require("gulp-clean"),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    runSequence = require('run-sequence'),
    imagemin = require('gulp-imagemin'),
    gutil = require("gulp-util"),
    autoprefixer = require('gulp-autoprefixer');
 //   sass = require("gulp-sass");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");
var webpackserver = require("./webpack.server.js");
var browserSync = require('browser-sync').create();

const reload = browserSync.reload;
const options = {
    isDev: true,
    isRelease: false,
    isPro: false,
    isFirstRun: true,
    ip: "0.0.0.0",
    hasImages: false,
}

gulp.task('watch', function() {
    options.isFirstRun = false;
    //gulp.watch("./src/sass/*.scss", ['sass']);
    gulp.watch("./src/**/*.html", ['html']);
});

gulp.task('clean', function() {
    return gulp.src(['build', 'dist'], {
        read: false
    }).pipe(clean());
});

// gulp.task('html', function() {
//     return gulp.src("./src/**/*.html")
//         .pipe(gulp.dest('./build'))
//         .pipe(reload({
//             stream: true
//         }));
// });

gulp.task('fonts',function () {
  return gulp.src("./src/fonts/**")
      .pipe(gulp.dest('./build/fonts/'))
      .pipe(reload({
          stream: true
      }));
})

// gulp.task('sass', function() {
//     var sassIn = gulp.src("./src/sass/base.scss")
//         .pipe(plumber())
//         .pipe(sourcemaps.init())
//         .pipe(sass().on('error', sass.logError))
//         .pipe(sourcemaps.write())
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions', 'Android >= 4.0'],
//             cascade: true, //是否美化属性值 默认：true
//             remove: true //是否去掉不必要的前缀 默认：true
//         }))
//         .pipe(gulp.dest("build/style"));
//     return options.isPro ? sassIn.pipe(cleanCSS())
//         .pipe(gulp.dest("dist/style")).pipe(reload({
//             stream: true
//         })) : sassIn.pipe(reload({
//             stream: true
//         }));
// });

gulp.task('images', function() {
    if (options.hasImages) {
        return false;
    }
    var imagesIn = gulp.src('./src/images/**/*');
    var goIn = options.isFirstRun ? imagesIn
        .pipe(cache(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        }))) : imagesIn;
    return goIn.pipe(gulp.dest("build/images"))
        .pipe(gulp.dest('dist/images'));
});

gulp.task("default", ["clean"], function() {
    options.isPro = false;
    options.isDev = true;
    runSequence(["images",'fonts'], ["watch", "webpack-dev-server"]);
});

gulp.task("webpack-dev-server", function(callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);
    //myConfig.devtool = "eval";
    myConfig.debug = true;

    // Start a webpack-dev-server
    new WebpackDevServer(webpack(myConfig), {
        contentBase: "./build/",
        stats: {
            colors: true
        },
        hot: true,
        inline: true,
        quiet: true,
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
    }).listen(8080, "0.0.0.0", function(err) {
        if (err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
    });
});

// Production build
gulp.task("build",["clean"], function() {
    options.isPro = true;
    options.isDev = false;
    runSequence(["images",'fonts'],["webpack:build"]);
});

gulp.task("webpack:build", function(callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackserver);
    // run webpack
    webpack(myConfig, function(err, stats) {
        if (err) throw new gutil.PluginError("webpack:build", err);
        gutil.log("[webpack:build]", stats.toString({
            colors: true
        }));
        callback();
    });
});
