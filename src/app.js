'use strict';

import * as angular from 'angular';

import 'angular-ui-router';

import './constants';
import './route';
import './home';
import './template'

angular
    .module('widgetProject', [
        'widgetProject.constants',
        'widgetProject.route',
        'widgetProject.template',
        'widgetProject.home'
    ]);

angular.bootstrap(document, ['widgetProject']);
