'use strict';

import HomeCtrl from './home.ctrl';

const homeModule = angular
                     .module('widgetProject.home', [])
                     .controller('HomeCtrl', HomeCtrl);

export default homeModule;
