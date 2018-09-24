module.exports = {
	root: './dist',
	babel: './.babelrc',
	autoprefixerConfig: ['last 10 version', '> 1%', 'ie 8', 'ie 9', 'Opera 12.1'],
	deploy: {
		host: 'ftp.lepshey.ru',
		user: 'lepsheyru',
		password: '19762007',
		dist: 'lepshey.ru/projects/test/'
	}
};