var gulp = require('gulp');

gulp.task('build', ['babel', 'cssmin', 'jsmin','cloneimages', 'html']);