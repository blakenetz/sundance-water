const gulp = require('gulp');
const webserver = require('gulp-webserver');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sass = require('gulp-sass');

gulp.task('default', () => {
  gulp.src('dist')
    .pipe(webserver({
      livereload: true,
      port: 1729,
      open: true,
    }));
});

gulp.task('run', () => {
  gulp.src('./src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(babel({
      presets: ['es2015'],
    }))
    // .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
  gulp.src('./src/stylesheets/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('listen', () => {
  gulp.watch([
    './src/stylesheets/**/*.scss',
    './src/stylesheets/*.scss',
    './src/js/*.js',
    './dist/partials/*.html'
  ], ['run']);
});
