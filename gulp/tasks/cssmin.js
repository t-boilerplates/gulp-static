const gulp 	    = require('gulp');
const cssMin 	= require('gulp-cssmin');
const rename 	= require('gulp-rename');

gulp.task( 'cssmin', () =>
    gulp
    .src('../src/css/all.css')
    .pipe(cssMin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('../static/css/'))
);