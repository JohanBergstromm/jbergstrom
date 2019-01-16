var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
 
gulp.task('scss', function () {
  return gulp.src('./src/style/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public'));
});
 
gulp.task('scss:watch', function () {
  gulp.watch('./scss/**/*.scss', ['scss']);
});