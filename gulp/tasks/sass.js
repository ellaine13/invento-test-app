'use strict';

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = function () {
	$.gulp.task('sass', function () {
		return $.gulp.src('./app/sass/main.scss')
			.pipe($.plumber())
			.pipe($.gulpIf(isDevelopment, $.gp.sourcemaps.init()))
			.pipe($.gp.sass({
				outputStyle: 'compressed'
			})).on('error', $.gp.notify.onError({
				title: 'Style'
			}))
			.pipe($.gp.autoprefixer({
				browsers: $.config.autoprefixerConfig
			}))
			.pipe($.gp.csso())
			.pipe($.gulpIf(isDevelopment, $.gp.sourcemaps.write()))
			.pipe($.gulp.dest($.config.root + '/assets/css'))
			.pipe($.browserSync.stream());
	});
};