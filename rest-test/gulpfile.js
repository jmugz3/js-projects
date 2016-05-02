var gulp = require('gulp');
var babel = require('gulp-babel');
var clear = require('gulp-clean');

gulp.task('watch', function(){
  gulp.watch('./src');
});

gulp.task('transpile', function(){
  return gulp.src('src/*.js')
          .pipe(babel())
          .pipe(gulp.dest('./dist'));
});

gulp.task('clean', function(){
    return gulp.src('./dist', {read:false})
            .pipe(clean());
});

gulp.task('default', ['clear', 'watchFiles', 'transpile']);
