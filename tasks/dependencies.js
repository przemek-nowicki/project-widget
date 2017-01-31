'use strict';

var _ = require('lodash');

module.exports = function getDependencies() {
    var dependencies = require('../package.json').dependencies;
    return _.keys(dependencies);
};
