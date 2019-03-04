const gulp 			= require('gulp');
const htmlReplace 	= require('gulp-html-replace');
const htmlMin 		= require('gulp-htmlmin');
const cleanHtml 	= require('gulp-clean');

gulp.task('html',['cleanhtml'], () =>
	gulp
	.src('../src/**/*.html')
	.pipe(htmlReplace({
		css: 'css/all.min.css',
		js: 'js/all.min.js'
	}))	
	.pipe(htmlMin( {collapseWhitespace: true} ))
	.pipe(gulp.dest('../static'))
)

gulp.task('cleanhtml', () => 
	gulp
	.src('../static/**/*.html')
    .pipe(cleanHtml( {force: true} ))
);