var gulp = require('gulp'),
  connect = require('gulp-connect'),
  concat = require('gulp-concat'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify'),
  ngAnnotate = require('gulp-ng-annotate');

gulp.task('js', function () {
  gulp.src(['public/js/**/app.js', 'public/js/**/*.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('public/bundle.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('.'))
});

// creates bundle and concats files together
gulp.task('watch', ['js'], function () {
  gulp.watch('public/js/**/*.js', ['js'])
});

// starts a web server on port 8080
gulp.task('webserver', function() {
	connect.server({
		root: 'public',
		livereload: true
	});
});

// default to webserver when running `gulp`
gulp.task('default', ['webserver']);