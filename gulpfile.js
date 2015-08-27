/*!
 * IamGamer.pro intro
 * https://github.com/IamGamerPro/intro
 *
 * Released under the MIT license
 * https://github.com/IamGamerPro/intro/blob/master/LICENSE
 */

const
	gulp = require('gulp'),
	del = require('del');

const
	ss = require('gulp-snakeskin'),
	babel = require('gulp-babel'),
	cached = require('gulp-cached');

gulp.task('clear', function (cb) {
	del(['./dist'], cb);
});

gulp.task('js', function (cb) {
	gulp.src('./src/**/*.js')
		.pipe(cached('build'))
		.pipe(babel({
			compact: false,
			auxiliaryCommentBefore: 'istanbul ignore next',
			loose: 'all',
			optional: [
				'spec.undefinedToVoid'
			]
		}))

		.on('error', function (err) {
			console.error(err.message);
			cb();
		})

		.pipe(gulp.dest('./dist'))
		.on('end', cb);
});

gulp.task('ss', function (cb) {
	gulp.src('./src/**/*.ss')
		.pipe(cached('build'))
		.pipe(ss({
			exec: true,
			prettyPrint: true
		}))

		.on('error', function (err) {
			console.error(err.message);
			cb();
		})

		.pipe(gulp.dest('./dist'))
		.on('end', cb);
});

gulp.task('watch', ['default'], function () {
	function unbind(name) {
		return function (e) {
			if (e.type === 'deleted') {
				delete cached.caches[name][e.path];
			}
		};
	}

	gulp.watch('./src/**/*.js', ['js']).on('change', unbind('build'));
	gulp.watch('./src/**/*.ss', ['ss']).on('change', unbind('build'));
});

gulp.task('default', ['js', 'ss']);