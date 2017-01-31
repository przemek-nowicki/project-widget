'use strict';

var _ = require('lodash');
var fs = require('fs');
var browserify = require('browserify');
var dependencies = require('./dependencies');

function buildApp() {
    var browserifyBundle = browserify('src/app.js', {debug: true});
    browserifyBundle.transform('babelify', {
        presets: ["es2015"]
    });
    _.each(dependencies(), function(lib) {
        browserifyBundle.external(lib);
    });
    browserifyBundle.bundle().pipe(fs.createWriteStream('static/js/app.js'));
}

buildApp();