const gulp          = require('gulp');
const concat        = require('gulp-concat');
const browserSync   = require('browser-sync');

gulp.task('concatjs', () =>
  gulp
  .src([
      // All Functions
      '../src/js/partials/your-function.js'
  ])
  .pipe(concat('all.js'))
  .pipe(gulp.dest('../src/js/'))
  .pipe(browserSync.stream())
);
