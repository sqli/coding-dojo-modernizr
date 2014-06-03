'use strict';

var gulp = require('gulp');
var open = require('open');

// Load plugins
var $ = require('gulp-load-plugins')();

// Copy
gulp.task('copy', function(){
    return gulp.src([
        'app/index.html',
        'app/robots.txt'
    ]).pipe(gulp.dest('dist'));
});

// HTML
gulp.task('html', function () {
    var jsFilter = $.filter('**/*.js');
    var cssFilter = $.filter('**/*.css');

    return gulp.src('app/index.html')
        .pipe($.useref.assets())
        .pipe(jsFilter)
        .pipe($.uglify())
        .pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe(cssFilter.restore())
        .pipe($.useref.restore())
        .pipe($.useref())
        .pipe(gulp.dest('dist'));
});


// Clean
gulp.task('clean', function () {
    return gulp.src(['dist'], { read: false }).pipe($.clean());
});

// Build
gulp.task('dist', ['clean', 'copy', 'html']);

// Default task
gulp.task('default', ['serve']);

gulp.task('server', function() {
    $.connect.server({
        root: ['app'],
        port: 9000,
        livereload: true
    });
    open('http://localhost:9000');
});

gulp.task('serve:production', function() {
    $.connect.server({
        root: ['dist'],
        port: 9001
    });
    open('http://localhost:9001');
});

// Test
gulp.task('test:unit', function(){
    gulp.src('not-exist.js').pipe($.plumber()).pipe($.karma({configFile: 'karma.conf.js'}));
});
gulp.task('test:e2e', function(){
    gulp.src('not-exist.js').pipe($.plumber()).pipe($.karma({configFile: 'karma.conf.e2e.js'}));
});

// Watch
gulp.task('serve', ['server'], function () {
    // Watch for changes in `app` folder
    gulp.watch([
        'app/index.html',
        'app/style.css',
        'app/src/**/*.html',
        'app/src/**/*.js',
        'app/modules/**/*.js',
    ], function (event) {
        return gulp.src(event.path)
            .pipe($.connect.reload());
    });
});

// Test
gulp.task('test', ['test:unit', 'test:e2e']);
