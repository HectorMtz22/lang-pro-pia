'use strict';

var gulp        = require('gulp');
var gutil       = require('gulp-util');
var sass        = require('gulp-sass')(require('node-sass'));
var pug         = require('gulp-pug');
var babel       = require('gulp-babel');
var livereload  = require('gulp-livereload');
var zip         = require('gulp-zip');
var rev         = require('gulp-rev');
var del         = require('del');
var browserSync = require('browser-sync');
var spa         = require('browser-sync-spa');
var deploy      = require('gulp-gh-pages');

browserSync.use(spa());

var paths = {
  src: 'src',
  dist: 'dist'
};

var pugFiles = {
  src: paths.src + '/**/!(_)*.pug',
  dist: paths.dist,
  watch: paths.src + '/**/*.pug'
}

var htmlFiles = {
  watch: paths.dist + '/**/*.html'
}

var scssFiles = {
  src: paths.src + '/scss/index.scss',
  dist: paths.dist + '/css/',
  watch: paths.src + '/scss/**/*.scss'
}

var jsFiles = {
  src: paths.src + '/js/**/*.js',
  dist: paths.dist + '/js',
  watch: paths.src + '/js/**/*.js'
}

var assetsFiles = {
  src: paths.src + '/assets/**/*.*',
  dist: paths.dist,
  watch: paths.src + '/assets/**/*.*'
}

var zipFiles = {
  src: paths.dist + '/**/*.*',
  dist: './zip/',
  name: 'ov-theme.zip'
}

// Compiles pug
function compilePug() {
  return gulp.src(pugFiles.src)
    .pipe(pug({
      locals: {},
      pretty: true
    }))
    .pipe(gulp.dest(pugFiles.dist))
    .pipe(browserSync.stream());
};

// Compiles SCSS
function compileSass() {
  return gulp.src(scssFiles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(scssFiles.dist))
    .pipe(browserSync.stream());
};

// Compiles Vanilla JS
const compileJs = () => {
  return gulp.src(jsFiles.src)
    .pipe(gulp.dest(jsFiles.dist))
    .pipe(browserSync.reload({
      stream: true
    }));
};

// Compiles ES6 JS
const compileJsBabel = () => {
  return gulp.src(jsFiles.src)
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest(jsFiles.dist));
};

// Inits Browser Sync server
function browserSyncServe(done) {
  browserSync.init({
    ghostMode: true,
    notify: false,
    server: {
      baseDir: paths.dist
    },
    open: true
  });
  done();
}

// Simple timeout to deal with Pug compiling lag
function reloadBrowserSyncPug() {
  return setTimeout(reloadBrowserSync, 500);
}

// Reload Browser sync
function reloadBrowserSync() {
  browserSync.reload();
}

// Clean dist dir
function clean() {
  return;
  // return del([paths.dist + '/**/*/*.*', paths.dist + '/*', paths.dist]);
}

// Watch Task
async function watch() {
  await gulp.watch(pugFiles.watch, gulp.series(compilePug));
  await gulp.watch(scssFiles.watch, gulp.series(compileSass));
  await gulp.watch(jsFiles.watch, gulp.series(compileJs));
  await gulp.watch(assetsFiles.watch, gulp.series(move));
};

// Zip dist task
const zipDist = () => {
  return gulp.src(zipFiles.src)
    .pipe(zip(zipFiles.name))
    .pipe(rev())
    .pipe(gulp.dest(zipFiles.dist));
};

// Move all assets task
const move = () => {
  return gulp.src(assetsFiles.src)
    .pipe(gulp.dest(assetsFiles.dist));
}

// [npm run build]
// exports.default = gulp.series(['clean', 'pug', 'sass', 'js', 'move']);
exports.default = gulp.series(compilePug, compileSass, compileJs, move);

// [npm run serve] Serve Task
exports.serve = gulp.series(compilePug, compileSass, compileJs, move, browserSyncServe, watch);

// Browsersync Task
//gulp.task('browsersync', browserSyncServe);

// Clean Task
//gulp.task('clean', clean);

// Move assets task
//gulp.task('moveassets', gulp.series('move'));

gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});

exports.deploy = gulp.series('deploy')