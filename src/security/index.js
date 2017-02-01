'use strict';

import * as angular from 'angular';

import API from './api.constants';
import STATE from './state.constnats.js';

const constantsModule = angular
    .module('widgetProject.constants', [])
    .constant('API', API)
    .constant('STATE', STATE);

export default constantsModule;