'use strict';

module.exports = function () {
	$.gulp.task('deploy', function () {

		const host = $.config.deploy.host,
			user = $.config.deploy.user,
			password = $.config.deploy.password,
			dest = $.config.deploy.dist;

		if (host && user && password && dest) {
			var conn = $.ftp.create({
				host: host,
				user: user,
				password: password,
				parallel: 3,
				log: $.gutil.log
			});

			return $.gulp.src($.config.root + '/**', {
				base: $.config.root + '/',
				buffer: false
			})
			//.pipe(conn.newer(dest)) // only upload newer files 
			.pipe(conn.dest(dest));
		}
	});
};