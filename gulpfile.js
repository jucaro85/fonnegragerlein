
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var useref = require('gulp-useref');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var cssnano = require('gulp-cssnano');
var gulpif = require('gulp-if');
var runSequence = require('run-sequence');
var del = require('del');

gulp.task('sass', function(){
  return gulp.src('fe-dev/includes/*.scss')
    .pipe(sass()) 
    .pipe(gulp.dest('fe-dev/includes/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'fe-dev'
    },
  })
});

gulp.task('prefixear', function () {
  return gulp.src('fe-dev/includes/css-main.css')
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('fe-dist/includes/'));
});

gulp.task('useref', function(){
  return gulp.src('fe-dev/*.html')
    .pipe(useref())
    .pipe(gulpif('*.css', cssnano()))
    .pipe(gulp.dest('fe-dist'));
}); 

gulp.task('images', function(){
  return gulp.src('fe-dev/media/**/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(cache(imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest('fe-dist/media'))
});

gulp.task('copyincludes', function(){
  return gulp.src(['fe-dev/includes/js-modernizr.js',
    'fe-dev/includes/js-main.js',
    'fe-dev/includes/js-jquery.js'  ])
    .pipe(gulp.dest('fe-dist/includes/'));
});

gulp.task('clean', function() {
  return del.sync('fe-dist');
})


/* =================================
MAIN WATCH TASK 
==================================== */
gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('fe-dev/**/*.scss', ['sass']);
  gulp.watch('fe-dev/*.html', browserSync.reload); 
  gulp.watch('fe-dev/includes/**/*.js', browserSync.reload);
});


/* =================================
MAIN BUILD TASK 
==================================== */
gulp.task('build', function(callback) {
  runSequence(
    'clean',
    ['prefixear', 'useref', 'images', 'copyincludes'],
    callback
  )
})

