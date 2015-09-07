/*!
 * IamGamer.pro intro
 * https://github.com/IamGamerPro/intro
 *
 * Released under the MIT license
 * https://github.com/IamGamerPro/intro/blob/master/LICENSE
 */

const
	async = require('async'),
	gulp = require('gulp'),
	through2 = require('through2'),
	ok = require('okay'),
	del = require('del');

const
	browserify = require('browserify'),
	babelify = require('babelify'),
	nib = require('nib');

const
	rename = require('gulp-rename'),
	ss = require('gulp-snakeskin'),
	stylus = require('gulp-stylus');

gulp.task('clear', function (cb) {
	del(['./dist'], cb);
});

gulp.task('js', function (cb) {
	return gulp.src('./src/index.js')
		.pipe(through2.obj(function (file, enc, next) {
			browserify(file.path)
				.transform(babelify.configure({
					compact: false,
					auxiliaryCommentBefore: 'istanbul ignore next',
					loose: 'all',
					optional: [
						'spec.undefinedToVoid'
					]
				}))

				.bundle(ok(next, function (res) {
					file.contents = res;
					next(null, file);
				}));
		}))

		.on('error', function (err) {
			console.error(err.message);
			cb();
		})

		.pipe(gulp.dest('./dist'));
});

gulp.task('ss', function (cb) {
	async.parallel([
		function (cb) {
			gulp.src('./src/index.ss')
				.pipe(ss({
					exec: true,
					prettyPrint: true,
					language: require('./src/en.json')
				}))

				.on('error', function (err) {
					console.error(err.message);
					cb();
				})

				.pipe(gulp.dest('./dist'))
				.on('end', cb);
		},

		function (cb) {
			gulp.src('./src/index.ss')
				.pipe(ss({
					exec: true,
					prettyPrint: true,
					language: require('./src/ru.json')
				}))

				.on('error', function (err) {
					console.error(err.message);
					cb();
				})

				.pipe(rename({suffix: '.ru'}))
				.pipe(gulp.dest('./dist'))
				.on('end', cb);
		}
	], cb);
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
	gulp.watch('./src/**/*.js', ['js']);
	gulp.watch('./src/**/*.ss', ['ss']);
	gulp.watch('./src/**/*.styl', ['stylus']);
});

gulp.task('default', ['js', 'ss', 'stylus']);
