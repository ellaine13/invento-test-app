'use strict';

module.exports = function () {
	$.gulp.task('watch', function () {
		$.gulp.watch('./app/**/*.js', $.gulp.series('js:process'));
		$.gulp.watch('./app/**/*.scss', $.gulp.series('sass'));
		$.gulp.watch('./app/**/*.pug', $.gulp.series('pug'));
		$.gulp.watch('./app/img/**/*.*', $.gulp.series('copy:image'));
	});
};