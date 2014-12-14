var gulp = require('gulp'); 

var sass = require('gulp-ruby-sass');

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('./src/styles/*.sass')
			.pipe(sass())
				.on('error', function (err) { console.log(err.message); })
				.pipe(gulp.dest('dist/assets/css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./src/styles/*.sass', ['sass']);
});

gulp.task('default', ['sass', 'watch']);