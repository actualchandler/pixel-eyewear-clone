const gulp = require('gulp'),
   concat = require("gulp-concat"),
   annotate = require("gulp-ng-annotate"),
   sass = require("gulp-sass"),
   nodemon = require('gulp-nodemon')
// , image = require('gulp-image')

var paths = {
   jsSource: ['public/app/**/*.js'],
   sassSource: ['public/**/*.scss'], // Change sass to scss if you want to work with it instead.
   copySource: ['public/**/*.html'],
   imageSource: ['public/img/*.*']
   // server: ['server/index.js']
};

// gulp.task('serve', function() {
// 	nodemon({
// 		'script': paths.server
// 	});
// });

gulp.task('sass', function () {
   gulp.src(paths.sassSource)
      .pipe(sass())
      .pipe(concat('bundle.css'))
      .pipe(gulp.dest('./dist'));
});

gulp.task('js', function () {
   gulp.src(paths.jsSource)
      .pipe(annotate())
      .pipe(concat('bundle.js'))
      .pipe(gulp.dest('./dist'));
});

gulp.task('copy', function () {
   gulp.src(paths.copySource)
      .pipe(gulp.dest('./dist'));
});

gulp.task('image', function () {
   gulp.src(paths.imageSource)
      // .pipe(image())
      .pipe(gulp.dest('./dist/img'))
})

// gulp.task('default', ['image']);
gulp.task('build', ['js', 'sass', 'copy', 'image']);


gulp.task('watch', function () {
   gulp.watch(paths.jsSource, ['js']);
   gulp.watch(paths.sassSource, ['sass']);
   gulp.watch(paths.copySource, ['copy']);
});

gulp.task('default', ['build', 'watch']); // add 'serve' to the array if you want gulp to run nodemon as well.
