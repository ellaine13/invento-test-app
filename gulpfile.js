'use strict';

global.$ = {
	package: require('./package.json'),
	config: require('./gulp/config'),
	path: {
		task: require('./gulp/paths/tasks.js'),
		jslibs: require('./gulp/paths/js.libs.js'),
		csslibs: require('./gulp/paths/css.libs.js'),
		app: require('./gulp/paths/app.js')
	},
	gulp: require('gulp'),
	rimraf: require('rimraf'),
	babel: require('gulp-babel'),
	uglify: require('gulp-uglify'),
	gulpIf: require('gulp-if'),
	ftp: require('vinyl-ftp'),
	plumber: require('gulp-plumber'),
	gutil: require('gulp-util'),
	browserSync: require('browser-sync').create(),
	gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function (taskPath) {
	require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
	'clean',
	$.gulp.parallel(
		'sass',
		'pug',
		'js:libs',
		'js:process',
		'copy:image',
		'copy:fonts',
		'js:lint',
		'css:libs'
	),
	$.gulp.parallel(
		'watch',
		'serve'
	)
));

$.gulp.task('build', $.gulp.series(
	'clean',
	$.gulp.parallel(
		'sass',
		'pug',
		'js:libs',
		'js:process',
		'copy:image',
		'copy:fonts',
		'js:lint',
		'css:libs'
	)
));

$.gulp.task('deploy', $.gulp.series('deploy'));