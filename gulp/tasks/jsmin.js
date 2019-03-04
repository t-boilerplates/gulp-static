const gulp 		= require('gulp');
const uglify 	= require('gulp-uglify-es').default;
const rename 	= require('gulp-rename');

gulp.task('jsmin', () =>
	gulp
	.src('../src/js/all.js')
	.pipe(uglify())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('../static/js/'))
);
