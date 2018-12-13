global.$ = {
	gulp : require('gulp'),
	concat: require('gulp-concat'),
	sass : require('gulp-sass'),
	postcss : require('gulp-postcss'),
	autoprefixer : require('autoprefixer'),
	mqpacker : require('css-mqpacker'),
	rigger : require('gulp-rigger'),
	plumber : require('gulp-plumber'),
	browserSync : require("browser-sync").create(),
	nunjucks : require('gulp-nunjucks'),
	del : require('del'),
	babel : require('gulp-babel'),
	gulpIf : require('gulp-if'),
	uglify : require('gulp-uglify'),
	debug : require('gulp-debug'),
	sourcemaps : require('gulp-sourcemaps'),
	isDevelopment : !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
	
	path: {
		tasks: require('./gulp/config/tasks.js')
	}
};

$.path.tasks.forEach(function (task) {
	require(task)();
});

// Default task
//******************************************
$.gulp.task("default",
	$.gulp.series('babelit', 'cleanImg', 'assets', 'scripts', 'styles', 'html')
);

// Development task
//******************************************
$.gulp.task('dev',
	$.gulp.series('default', $.gulp.parallel('watch', 'webserver'))
);