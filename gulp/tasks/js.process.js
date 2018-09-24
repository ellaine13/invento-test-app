'use strict';


const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = function () {
	$.gulp.task('js:process', function () {
		return $.gulp.src($.path.app)
			.pipe($.plumber())
			.pipe($.gp.babel({
				presets: ['env']
			}))
			.pipe($.gulpIf(isDevelopment, $.gp.sourcemaps.init()))
			.pipe($.gp.concat('main.js'))
			.pipe($.gp.uglify())
			.pipe($.gulpIf(isDevelopment, $.gp.sourcemaps.write()))
			.pipe($.gulp.dest($.config.root + '/assets/js'));
	});
};