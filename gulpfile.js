const gulp = require('gulp');
const webserver = require('gulp-webserver');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

gulp.task('default', () => {
  gulp.src('./src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./dist/'));
  gulp.src('dist')
    .pipe(webserver({
      livereload: true,
      port: 1729,
      open: true
    }));
});
