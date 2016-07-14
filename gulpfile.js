//gulp组件
var gulp = require('gulp'),
	gutil = require('gulp-util'),
  	connect = require('gulp-connect'),
  	server = require('gulp-server-livereload'),
  	htmlmin = require('gulp-htmlmin'),
  	cssmin = require('gulp-cssmin'),
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean'),
  	gulpOpen = require('gulp-open');

//webpack配置、组件
var webpack = require('webpack'),
	webpackConfig = require('./webpack.config.js'),
	myDevConfig = Object.create(webpackConfig),
	devCompiler = webpack(myDevConfig);

//引用webpack对js进行操作
gulp.task("buildJs", function(callback) {
    devCompiler.run(function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build-js", err);
        gutil.log("[webpack:build-js]", stats.toString({
            colors: true
        }));
        callback();
    });
});

//压缩html
gulp.task('htmlmin', function (done) {
    return gulp.src('app/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
});

//css压缩
gulp.task('cssmin', function () {
    return gulp.src('app/**/*.css')
        .pipe(cssmin())
    .pipe(gulp.dest('dist'));
});

//图片压缩
gulp.task('imagemin', function () {
    return gulp.src('app/**/*.{jpg,png,gif}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist'));
});

//服务器-可以单页
gulp.task('server', function() {
  	return gulp.src('dist').pipe(server({
      	fallback: 'index.html',
      	port:3000
    }));
});

//文件监听
gulp.task('watch', function (done) {
    gulp.watch(['app/**/*.js','webpack.config.js'], ['buildJs']).on('end', done);
    gulp.watch('app/**/*.html', ['htmlmin']).on('end', done);
    gulp.watch('app/**/*.css', ['cssmin','buildJs']).on('end', done);
    gulp.watch('app/**/*.{jpg,png,gif,ico}', ['imagemin']).on('end', done);
});

//清除文件
gulp.task('clean', function (done) {
    return gulp.src('dist/', {read: false})
        .pipe(clean());
});

//打开浏览器
var os = require('os');
var browser = os.platform() === 'linux' ? 'Google chrome' : (
  os.platform() === 'darwin' ? 'Google chrome' : (
  os.platform() === 'win32' ? 'chrome' : 'firefox'));
gulp.task('open', function (done) {
    return gulp.src('')
        .pipe(gulpOpen({
            app: browser,
            uri: 'http://localhost:3000/'
        }))
        .on('end', done);
});

//组合指令
gulp.task('dev', ['server', 'buildJs', 'imagemin', 'cssmin', 'htmlmin','watch', 'open']);