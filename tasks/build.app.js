'use strict';

const _ = require('lodash');
const fs = require('fs');
const browserify = require('browserify');
const dependencies = require('./dependencies');


function buildApp() {
    const browserifyBundle = browserify('src/app.js', {debug: true});
    browserifyBundle.transform('babelify', {
        presets: ['es2015']
    });
    _.each(dependencies(), function(lib) {
        browserifyBundle.external(lib);
    });
    browserifyBundle.bundle().pipe(fs.createWriteStream('static/js/app.js'));
}

buildApp();