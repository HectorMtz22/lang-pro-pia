"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass")(require("node-sass"));
const zip = require("gulp-zip");
const rev = require("gulp-rev");
const browserSync = require("browser-sync");
const spa = require("browser-sync-spa");
const handlebars = require("gulp-compile-handlebars");
const rename = require("gulp-rename");
const sources = require("./src/data");
browserSync.use(spa());

const paths = {
  src: "src",
  dist: "dist",
};

const hbsFiles = {
  src: paths.src + "/**/!(_)*.hbs",
  dist: paths.dist,
  watch: paths.src + "/**/*.hbs",
};

// const htmlFiles = {
//  watch: paths.dist + '/**/*.html'
// }

const scssFiles = {
  src: paths.src + "/scss/**/*.scss",
  dist: paths.dist + "/css/",
  watch: paths.src + "/scss/**/*.scss",
};

const jsFiles = {
  src: paths.src + "/js/**/*.js",
  dist: paths.dist + "/js",
  watch: paths.src + "/js/**/*.js",
};

const variables = {
  src: paths.src + "/data/**/*.json",
  watch: paths.src + "/data/**/*.json",
};

const assetsFiles = {
  src: paths.src + "/assets/**/*.*",
  dist: paths.dist,
  watch: paths.src + "/assets/**/*.*",
};

const javaFiles = {
  src: paths.src + "/java/**/*.*",
  dist: paths.dist + "/tareas",
  watch: paths.src + "/java/**/*.*",
};

const tareaFiles = {
  src: paths.src + "/tareas/**/*.*",
  dist: paths.dist + "/tareas",
  watch: paths.src + "/tareas/**/*.*",
};

const zipFiles = {
  src: paths.dist + "/**/*.*",
  dist: "./zip/",
  name: "ov-theme.zip",
};

// Compile Handlebars
function compileHbs() {
  const templateData = {
    ...sources,
  };
  const options = {
    ignorePartials: true, // ignores the unknown footer2 partial in the handlebars template, defaults to false
    batch: ["./src/partials"],
    helpers: {
      capitals: function (str) {
        return str.toUpperCase();
      },
    },
  };

  return gulp
    .src("src/*.hbs")
    .pipe(handlebars(templateData, options))
    .pipe(
      rename(function (path) {
        path.extname = ".html";
      })
    )
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
}

// Compiles SCSS
function compileSass() {
  return gulp
    .src(scssFiles.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(scssFiles.dist))
    .pipe(browserSync.stream());
}

// Compiles Vanilla JS
const compileJs = () => {
  return gulp
    .src(jsFiles.src)
    .pipe(gulp.dest(jsFiles.dist))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
};
// Compiles Vanilla JS
const compileVariables = () => {
  return gulp.src(variables.src).pipe(
    browserSync.reload({
      stream: true,
    })
  );
};
// Compiles ES6 JS
/*
const compileJsBabel = () => {
  return gulp.src(jsFiles.src)
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest(jsFiles.dist))
}
*/

// Inits Browser Sync server
function browserSyncServe(done) {
  browserSync.init({
    ghostMode: true,
    notify: false,
    server: {
      baseDir: paths.dist,
    },
    open: true,
  });
  done();
}

// Simple timeout to deal with Pug compiling lag
/* function reloadBrowserSyncPug () {
  return setTimeout(reloadBrowserSync, 500)
}
*/

// Watch Task
function watch() {
  gulp.watch(variables.watch, gulp.series(compileVariables));
  gulp.watch(hbsFiles.watch, gulp.series(compileHbs));
  gulp.watch(scssFiles.watch, gulp.series(compileSass));
  gulp.watch(jsFiles.watch, gulp.series(compileJs));
  gulp.watch(assetsFiles.watch, gulp.series(move));
  gulp.watch(javaFiles.watch, gulp.series(moveJava));
  gulp.watch(tareaFiles.watch, gulp.series(moveTareas));
}

// Zip dist task
const zipDist = () => {
  return gulp
    .src(zipFiles.src)
    .pipe(zip(zipFiles.name))
    .pipe(rev())
    .pipe(gulp.dest(zipFiles.dist));
};

// Move all assets task
const move = () => {
  return gulp.src(assetsFiles.src).pipe(gulp.dest(assetsFiles.dist));
};

// Move all assets task
const moveJava = () => {
  return gulp.src(javaFiles.src).pipe(gulp.dest(javaFiles.dist));
};

const moveTareas = () => {
  return gulp.src(tareaFiles.src).pipe(gulp.dest(tareaFiles.dist));
};

// [npm run build]
// exports.default = gulp.series(['clean', 'pug', 'sass', 'js', 'move']);
exports.default = gulp.series(
  compileHbs,
  compileSass,
  compileJs,
  move,
  moveJava,
  moveTareas
);

// [npm run serve] Serve Task
exports.serve = gulp.series(browserSyncServe, watch);
exports.zip = gulp.series(zipDist);

// Browsersync Task
// gulp.task('browsersync', browserSyncServe);

// Clean Task
// gulp.task('clean', clean);

// Move assets task
// gulp.task('moveassets', gulp.series('move'));
