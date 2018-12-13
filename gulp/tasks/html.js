module.exports = function () {
	$.gulp.task('html', (done) => {
		$.gulp.src('src/templates/*.html')
			.pipe($.nunjucks.compile())
			.pipe($.gulp.dest('./frontend/'))
			.on('end', $.browserSync.reload);
		done();
	});
};