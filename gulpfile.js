var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');

gulp.task('sass', function () {
  gulp.src('app/styles/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/'));
});

gulp.task('js', function () {
  gulp.src('app/js/**/*.js')
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['sass', 'js']);