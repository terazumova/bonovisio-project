const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () {
  return gulp.src('app/scss/*.scss').pipe(sass()).pipe(gulp.dest('dist/'));
});

gulp.task('scripts', function () {
  return gulp.src('app/js/index.js').pipe(gulp.dest('dist/'));
});

gulp.task('code', function () {
  return gulp.src('app/*.html').pipe(gulp.dest('dist/'));
});

gulp.task('fonts', function () {
  return gulp.src('app/assets/fonts/*.ttf').pipe(gulp.dest('dist/assets/fonts/'));
});

gulp.task('images', function () {
  return gulp.src('app/assets/imgs/*.svg').pipe(gulp.dest('dist/assets/imgs/'));
});

gulp.task('default', gulp.parallel('sass', 'code', 'scripts', 'fonts', 'images'));
