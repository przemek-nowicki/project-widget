'use strict';

const _ = require('lodash');
const fs = require('fs');
const browserify = require('browserify');
const dependencies = require('./dependencies');

function buildVendor() {
    const browserifyBundle = browserify();
    _.each(dependencies(), function(lib) {
        browserifyBundle.require(lib);
    });
    browserifyBundle.bundle().pipe(fs.createWriteStream('static/js/vendor.js'));
}

buildVendor();