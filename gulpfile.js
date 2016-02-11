/**
 * Created by Chris on 2/10/2016.
 */
var exec = require('gulp-exec');
var typescript = require('gulp-tsc');

gulp.task('compile', function(){
    gulp.src(['src/**/*.ts'])
        .pipe(typescript())
        .pipe(gulp.dest('dist/'))
});