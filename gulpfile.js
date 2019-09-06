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
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/dev/css/'))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/prod/css/')); // build css without sourcemaps
});


gulp.task('default', ['sass']);