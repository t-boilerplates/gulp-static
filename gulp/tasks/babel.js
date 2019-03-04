const gulp  = require('gulp');
const babel = require('gulp-babel');

gulp.task('babel', () =>
    gulp
    .src('../src/js/all.js')
    .pipe(babel({presets: ['@babel/preset-env']}))
    .pipe(gulp.dest('../src/js/'))
);