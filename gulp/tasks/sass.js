const gulp        = require('gulp');
const sass        = require('gulp-sass');
const browserSync = require('browser-sync');

gulp.task('sass', () => 
  gulp
  .src(['../src/sass/**/*.scss'])
  .pipe(sass().on('Erro de Sintaxe', sass.logError))
  .pipe(gulp.dest('../src/css/'))
  .pipe(browserSync.stream())
);
