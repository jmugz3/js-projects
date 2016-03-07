var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('default', function() {
  nodemon({
    script: 'app.js',
    ex: 'js',
    env: {
      PORT: 5555
    },
    ignore: ['./node_modules/**']
  })
  .on('restart', function () {
    console.log("Restarting the server. ");
  });


});
