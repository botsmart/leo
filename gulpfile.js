const gulp = require('gulp'),
    ts = require('gulp-typescript'),
    tslint = require('gulp-tslint')
browserify = require('browserify'),
    jasmine = require('gulp-jasmine'),
    karma = require('karma').server,
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps')
runSequence = require('run-sequence'),
    Server = require('karma').Server;

// const browserified = transform(function (filename) {
//     var b = browserify({
//         entries: filename,
//         debug: true
//     });
//     return b.bundle();
// });

// gulp.task('test', function (done) {
//     new Server({
//         configFile: __dirname + '/karma.conf.js',
//         action: 'watch',
//         showStack: true
//     }, done).start();
// });


gulp.task('lint', () => {
    return gulp.src([
            './src/**/**.ts'
        ]).pipe(tslint({
            formatter: "prose"
        }))
        .pipe(tslint.report({
          emitError: false
      }));
});



const tsProject = ts.createProject('tsconfig.json');

// gulp.task('tsc', () => {
//     return gulp.src('./src/**/**.ts')
//         .pipe(ts(tsProject))
//         .js.pipe(gulp.dest('./temp/source/js'));
// });


gulp.task('tsc', ['lint'], () => {
    const tsResult = tsProject.src().pipe(sourcemaps.init()).pipe(tsProject());

    return tsResult.js.pipe(sourcemaps.write('./', {
        includeContent: false
    })).pipe(gulp.dest('./out'));
});

gulp.task("watch", function () {
    gulp.watch("./src/**/*.ts", ["tsc"]);
})

// gulp.task('test:run', function() {
//     return gulp.src('./temp/**/**.spec.*')
//       .pipe(jasmine())
// });


// gulp.task('test', [], function(cb) {
//   runSequence('tsc', 'test:run', cb);
// });


gulp.task('karma:test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        showStack: true
    }, done).start();
});

gulp.task("default", ["watch"]);

// gulp.task('bundle-js', function () {
//     return gulp.src('./temp/source/js/main.js')
//         .pipe(browserified)
//         .pipe(sourcemaps.init({
//             loadMaps: true
//         }))
//         .pipe(uglify())
//         .pipe(sourcemaps.write('./'))
//         .pipe(gulp.dest('./dist/source/js/'));
// });