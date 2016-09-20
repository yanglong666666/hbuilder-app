/**
 * Created by dell on 2016/9/19.
 */
'use strict';

var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var runSequence = require('run-sequence');
var del = require('del');
var uglify = require('gulp-uglify');

/**
 * clean
 */
gulp.task('clean', function (cb) {
    del(['dist/**/*'], cb);
});
/**
 * copy
 */
gulp.task('copy', function () {
    return gulp.src(['public/**/*', '!public/css/default.css', '!public/js/plugins.js', '!public/js/validate.js'])
    .pipe(gulp.dest('dist'));
});
/**
 *  compile jade to html
 */

gulp.task('templates', function(){
    return gulp.src('jade/*.jade')
    .pipe(jade({
        pretty:true
    }))
    .pipe(gulp.dest('dist'));
});
/**
 *  mincss
 */

gulp.task('mincss', function () {
    gulp.src('stylus/css/default.styl')
    .pipe(stylus({
        compress: true
    }))
    .pipe(gulp.dest('dist/css/'))
});

/**
 *  minjs
 */
gulp.task('minpluginsjs', function () {
    return gulp.src('public/js/plugins.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('minvalidatejs', function () {
    return gulp.src('public/js/validate.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});
gulp.task('minjs',['minvalidatejs','minpluginsjs']);


gulp.task('dist', function(cb) {
    runSequence('clean',['copy', 'templates', 'mincss', 'minjs'], cb);
});