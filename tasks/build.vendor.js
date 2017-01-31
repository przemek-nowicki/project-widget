'use strict';

var _ = require('lodash');
var fs = require('fs');
var browserify = require('browserify');
var dependencies = require('./dependencies');

function buildVendor() {
    var browserifyBundle = browserify();
    _.each(dependencies(), function(lib) {
        browserifyBundle.require(lib);
    });
    browserifyBundle.bundle().pipe(fs.createWriteStream('static/js/vendor.js'));
}

buildVendor();