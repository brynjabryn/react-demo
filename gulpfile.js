var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var runSequence = require('run-sequence');

gulp.task('default', function() {
  console.log('Hello');
});

gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'))
});

gulp.task('js', function(){
  return gulp.src('app/js/**/*.js')
    .pipe(useref())
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  gulp.watch('app/js/**/*.js', ['js']); 
});

gulp.task('build', function (callback) {
  runSequence('clean:dist', 
    ['sass', 'js'],
    callback
  )
});