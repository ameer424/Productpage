const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const minifycss = require('gulp-minify-css');
const concat = require('gulp-concat');
const rename = require("gulp-rename");
const uglify = require('gulp-uglify');

function defaultTask() {
    
    return gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/popper.js/dist/umd/popper.js',
        'node_modules/bootstrap/js/dist/dom/data.js',
        'node_modules/bootstrap/js/dist/dom/manipulator.js',
        'node_modules/bootstrap/js/dist/dom/selector-engine.js',
        'node_modules/bootstrap/js/dist/dom/event-handler.js',
        'node_modules/bootstrap/js/dist/base-component.js',
        // 'node_modules/bootstrap/js/dist/button.js',
        'node_modules/bootstrap/js/dist/dropdown.js',
        'node_modules/bootstrap/js/dist/collapse.js',
        'node_modules/toastr/toastr.js',
        'src/js/main.js',
    ])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./js'));
}

module.exports.default = defaultTask;