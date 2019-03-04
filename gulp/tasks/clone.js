const gulp          = require('gulp');
const cleanImages   = require('gulp-clean');

gulp.task('cloneimages', ['cleanimages'], () =>
    gulp
    .src('../src/images/**/*')
	.pipe(gulp.dest('../static/images/'))
);

gulp.task('cleanimages', () =>
    gulp
    .src('../static/images/**/*')
    .pipe(cleanImages({force: true}))
);