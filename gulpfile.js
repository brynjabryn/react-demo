var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
const concat = require('gulp-concat');
const browserify = require('browserify');

var paths = {
    sass: ['app/styles/**/*.scss'],
    js: ['app/js/**/*.js']
};

gulp.task('sass', function () {
  gulp.src(paths.sass)
    .pipe(sass())
    .pipe(gulp.dest('dist/'));
});

gulp.task('js', function () {
    browserify(paths.js)
    .bundle()
    .pipe(babel({
        presets: ['react']
    }))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['sass', 'js']);