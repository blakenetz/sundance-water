const gulp = require('gulp');
const webserver = require('gulp-webserver');
const babel = require('gulp-babel');

gulp.task('webserver', function() {
  gulp.src('dist')
    .pipe(webserver({
      livereload: true,
      port: 8080,
      open: true
    }));
});

// gulp.task('default', () => {
//   return gulp.src('src/app.js')
//   .pipe(babel({
//     presets: ['es2015']
//   }))
//   .pipe(gulp.dest('dist'));
// });
