var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var babelify = require('babelify');

var dependencies = [
	'react',
  	'react-dom'
];

var paths = {
    sass: ['app/styles/**/*.scss'],
    js: 'app/js/components.js'
};

gulp.task('sass', function () {
  gulp.src(paths.sass)
    .pipe(sass())
    .pipe(gulp.dest('dist/'));
});

gulp.task('js', function () {
    browserify({
            entries: paths.js,
			require: dependencies,
			debug: true
        })
        .transform("babelify", {presets: ["es2015", "react"]})
        .bundle()
        .on('error', gutil.log)
        .pipe(source('app.js'))
        .pipe(gulp.dest('dist/'));
});
          
gulp.task('default', ['sass', 'js']);