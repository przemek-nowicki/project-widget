'use strict';

import * as angular from 'angular';
import LayoutRoute from './layout.route';
import MainRoute from './main.route';

const routerModule = angular
    .module('widgetProject.route', ['ui.router'])
    .config(LayoutRoute)
    .config(MainRoute)
    .config(function($locationProvider) {
        $locationProvider.html5Mode(true);
    });

export default routerModule;