const gulp          = require('gulp');
const browserSync   = require('browser-sync');

gulp.task('default', ['sass', 'concatjs', 'serve'], () => {
    gulp.watch('../src/sass/**/*.scss', ['sass']);
    gulp.watch('../src/js/**/*.js', ['concatjs']);
    gulp.watch('../src/*.html').on('change', browserSync.reload);
});