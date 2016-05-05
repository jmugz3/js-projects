'use strict';

var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    gutil = require('gulp-util');
    
gulp.task('mocha', function () {
   return gulp.src(['test/*.js' ], {read: false})
    .pipe(mocha({reporter: 'list'}))
    .on('error', gutil.log); 
});


gulp.task('watch-mocha', function () {
   gulp.run('mocha'); //to run once after called
   gulp.watch(['./**/*.js' ], ['mocha']); //watch file and run tasks 
});

gulp.task('default', ['watch-mocha']);