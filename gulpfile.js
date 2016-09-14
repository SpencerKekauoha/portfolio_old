var gulp = require('gulp');
var concat = require('gulp-concat');
var annotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

var paths = {
  jsSource: ['./app/**/*.js', '!/public/bundle.js'],
  sassSource: ['./styles/**/*.scss']
};

gulp.task('js', function() {
  return gulp.src(paths.jsSource)
  .pipe(concat('bundle.js'))
  .pipe(annotate())
  //.pipe(uglify()) //Uncomment when code is production ready
  .pipe(gulp.dest('./app'));
});

gulp.task('styles', function () {
  return gulp.src(paths.sassSource)
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./styles'));
});

gulp.task('watch', function() {
  gulp.watch(paths.jsSource, ['js']);
  gulp.watch(paths.sassSource, ['styles']);
  gulp.watch(paths.html, ['html']);
});

gulp.task('default', ['watch', 'js', 'styles']);
