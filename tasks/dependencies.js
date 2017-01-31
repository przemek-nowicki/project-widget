'use strict';

var _ = require('lodash');
var path = require('path');

module.exports = function getDependencies() {
    var dependencies = require(path.join(__dirname, '..', 'package.json')).dependencies;
    return _.keys(dependencies);
};
