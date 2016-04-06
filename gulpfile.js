const gulp = require('gulp');

const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const reactify = require('reactify');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const source = require('vinyl-source-stream');
const gutil = require('gulp-util');
const watchify = require('watchify');

const bundler = watchify(
  browserify({
    entries: ['./index.jsx'],
    transform: [reactify],
    debug: true,
    cache: {},
    packageCache: {}
  })
);

function bundle() {
  return bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify error'))
    .pipe(source('./index.jsx'))
    .pipe(buffer())
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./dist'));
}

gulp.task('default', ['styles'], bundle);

bundler.on('update', bundle);
bundler.on('log', gutil.log);

gulp.task('styles', () => {
  return gulp.src('./assets/styles/*')
    .pipe(sass())
    .pipe(gulp.dest('./dist'));
});

gulp.watch('./assets/styles/*', ['styles']);
