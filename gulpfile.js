var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var addVariablesToCss = require('postcss-simple-vars');
var nestedCssStructures = require('postcss-nested');
var cssImport = require('postcss-import');
var browserSync = require('browser-sync').create();

gulp.task('default', function(){
  console.log("hooray, you created a gulp task");
});

gulp.task('html', function(){
  console.log("Imagine some useful HTML magic happening here!");
});

gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport,addVariablesToCss,nestedCssStructures,autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){
  
  browserSync.init({
    server: {
      baseDir: "app"
    }
  });
  
  watch('./app/index.html', function(){
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  });
})
