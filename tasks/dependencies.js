'use strict';

const _ = require('lodash');
const path = require('path');

module.exports = () => _.keys(require(path.join(__dirname, '..', 'package.json')).dependencies);
