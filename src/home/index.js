'use strict';

import * as angular from 'angular';

import HomeCtrl from './home.ctrl';

const homeModule = angular
                     .module('widgetProject.home', [])
                     .controller('HomeCtrl', HomeCtrl);

export default homeModule;
