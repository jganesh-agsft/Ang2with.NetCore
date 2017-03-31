﻿/// <binding BeforeBuild='libs' Clean='clean' />



var gulp = require('gulp');

var rimraf = require('rimraf')

var paths = {
    npm: './node_modules/',
    lib: './wwwroot/lib/'
};

var libs = [
   paths.npm + 'core-js/client/shim.min.js',
   paths.npm + 'zone.js/dist/zone.js',
   paths.npm + 'reflect-metadata/Reflect.js',
   paths.npm + 'systemjs/dist/system.src.js'
];

gulp.task('libs', function () {
    return gulp.src(libs).pipe(gulp.dest(paths.lib));
});

gulp.task('clean', function (callback) {
    rimraf(paths.lib, callback);
});