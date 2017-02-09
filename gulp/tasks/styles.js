var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var addVariablesToCss = require('postcss-simple-vars');
var addNestedCssStructures = require('postcss-nested');
var cssImport = require('postcss-import');
var mixins = require('postcss-mixins');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport,mixins,addVariablesToCss,addNestedCssStructures,autoprefixer]))
    .on('error', function(error) {
      console.log(error.toString());
      this.emit('end');
    }) // if an error occurs
    .pipe(gulp.dest('./app/temp/styles'));
});
