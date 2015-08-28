/*!
 * IamGamer.pro intro
 * https://github.com/IamGamerPro/intro
 *
 * Released under the MIT license
 * https://github.com/IamGamerPro/intro/blob/master/LICENSE
 */

const
	gulp = require('gulp'),
	del = require('del'),
	nib = require('nib');

const
	ss = require('gulp-snakeskin'),
	babel = require('gulp-babel'),
	stylus = require('gulp-stylus'),
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
	gulp.src('./src/index.ss')
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

gulp.task('stylus', function (cb) {
	gulp.src('./src/index.styl')
		.pipe(stylus({
			use: [nib()]
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
	gulp.watch('./src/**/*.styl', ['stylus']).on('change', unbind('build'));
});

gulp.task('default', ['js', 'ss', 'stylus']);
