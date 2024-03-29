import gulp from 'gulp';
import gulpif from ' gulp-if';
import concat from ' gulp-concat';
import webpack from 'webpack';
import gulpwebpack from ' webpack-stream';
import named from ' vinyl-named';
import livereload from ' gulp-livereload';
import plumber from 'gulp-plumber';
import rename from ' gulp-rename';
import uglify from 'gulp-uglify';   // 压缩js
import { log, colors } from ' gulp-util';   //命令行输出
import args from './util/args'

gulp.task('scripts', () => {
    return gulp.src(['app/js/index.js'])
        .pipe(plumber({
            errorHandler: function () {

            }
        }))
        .pipe(named())
        .pipe(gulpwebpack({
            module: {
                loaders: [{
                    test: /\.js$/,
                    loader: 'babel'
                }]
            }
        }), null, (err, stats) => {
            log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
                chunks: false
            }))
        })
        .pipe(gulp.dest('server/public/js'))
        .pipe(rename({
            basename: 'cp',
            extname: '.min.js'
        }))
        .pipe(uglify({ compress: { properties: false }, output: { 'quote_keys': true } }))
        .pipe(gulp.dest('server/public/js'))
        .pipe(gulpif(args.watch, livereload()))
})