'use strict';

const gulp = require('gulp');

// sass
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

// sass
gulp.task('sass', function () {
  gulp.src('src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/prod/css/')) // build css without sourcemaps
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/dev/css/')) // build css with sourcemaps
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('src/sass/**/*.scss', ['sass', 'wordpressStyles']);
});

gulp.task('default', ['sass', 'watch']);