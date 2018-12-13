module.exports = function () {
	$.gulp.task('babelit', (done) => {
		$.gulp.src('src/js/init.js')
			.pipe($.plumber())
			.pipe($.rigger())
			.pipe($.babel({
				presets: ['env']
			}))
			.pipe($.debug())
			.pipe($.gulp.dest('src/js/babled'));
		done();
	});
};